import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectSearchResult } from '../../redux/search-result/search.selector'
import SearchItem from '../search-item/search-item.component'

const SearchResult = ({ results }) => (
  <div className="results">
    <ul className="results__list">
      {
        results
        .slice(0, 10)
        .map(result => (
          <SearchItem key={result.recipe_id} result={result} />
        ))
      }
    </ul>
  </div>
)

const mapStateToProps = createStructuredSelector({
  results: selectSearchResult
})

export default connect(mapStateToProps)(SearchResult);
