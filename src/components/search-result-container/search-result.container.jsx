import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectMountSearch } from '../../redux/search-result/search.selector'

import SearchResult from '../search-result/search-result.component'

const SearchResultContainer = ({ mountSearch }) => {
  return mountSearch ? (<SearchResult />) : ''
}

const mapStateToProps = createStructuredSelector({
  mountSearch: selectMountSearch
})

export default connect(mapStateToProps)(SearchResultContainer);