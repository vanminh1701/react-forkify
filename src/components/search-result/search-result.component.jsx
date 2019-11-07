import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSearchResult } from "../../redux/search-result/search.selector";

import SearchItem from "../search-item/search-item.component";
import PaginationButtons from "../pagination-buttons/pagination-buttons.component";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      results: this.props.results
    };
  }

  changePage = page => this.setState({ page: page }) 

  render() {
    const { results, page } = this.state;
    const start = (page - 1) * 10;
    const end = page * 10;
    return (
      <div className="results">
        <ul className="results__list">
          {results
          .slice(start, end)
          .map(result => (
            <SearchItem key={result.recipe_id} result={result} />
          ))}
        </ul>
        <PaginationButtons changePage={this.changePage}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  results: selectSearchResult
});

export default connect(mapStateToProps)(SearchResult);
