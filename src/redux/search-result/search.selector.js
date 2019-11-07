import { createSelector } from 'reselect';

const selectResult = state => state.result;

export const  selectSearchResult = createSelector(
  [selectResult],
  results => results.searchResults
)

export const selectSearchRenderCondition = createSelector(
  [selectResult],
  results => results.renderCondition
)

export const selectPages = createSelector(
  [selectResult],
  results => Math.ceil(results.searchResults.length / 10)
)