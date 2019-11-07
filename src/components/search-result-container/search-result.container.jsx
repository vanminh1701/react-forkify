import { connect } from 'react-redux';
import { compose } from 'redux'

import { selectSearchRenderCondition } from '../../redux/search-result/search.selector'

import SearchResult from '../search-result/search-result.component'
import WithRender from '../with-render/with-render.component';


const mapStateToProps = state => ({
  renderCondition: selectSearchRenderCondition(state)
})

const SearchResultContainer = compose(
  connect(mapStateToProps),
  WithRender
  )(SearchResult)
export default SearchResultContainer;
