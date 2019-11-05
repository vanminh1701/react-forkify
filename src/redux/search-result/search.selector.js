import { createSelector } from 'reselect';

const selectResult = state => state.result;

export const  selectSearchResult = createSelector(
  [selectResult],
  results => results.searchResults
)

export const selectMountSearch = createSelector(
  [selectResult],
  results => !!results.searchResults
)