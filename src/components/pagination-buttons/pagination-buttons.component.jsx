import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectPages } from '../../redux/search-result/search.selector'

import PaginationButton from "../pagination-button/pagination-button.component";

import "./pagination-buttons.styles.scss";

class PaginationButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      maxPage: this.props.maxPage
    };

    this.changePage = this.props.changePage
  }

  clickNextPage = () => 
    this.setState({ page: this.state.page + 1 }, () => this.changePage(this.state.page));

  clickPreviousPage = () => 
    this.setState({ page: this.state.page - 1 }, () => this.changePage(this.state.page));

  render() {
    const { page, maxPage } = this.state;
    if (page === 1) {
    return (
      <div className="results__pages">
        <PaginationButton shape={"triangle-right"} page={2} status={"next"} onClick={this.clickNextPage}/>
      </div>      
    )} else if (page < maxPage) {
      return (
        <div className="results__pages">
        <PaginationButton shape={"triangle-left"} page={page - 1} status={"prev"} onClick={this.clickPreviousPage}/>
        <PaginationButton shape={"triangle-right"} page={page + 1} status={"next"} onClick={this.clickNextPage}/>
      </div>
      )} else if (page === maxPage) {
        return (                          
          <div className="results__pages">
        <PaginationButton shape={"triangle-left"} page={page - 1} status={"prev"} onClick={this.clickPreviousPage}/>
      </div>
        )
      }
  }
}

const mapStateToProps = createStructuredSelector({
  maxPage: selectPages
})

export default connect(mapStateToProps)(PaginationButtons);
