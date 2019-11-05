import { createSelector } from 'reselect'

const selectRecipe = state => state.recipe;

export const selectRecipeData = createSelector(
  [selectRecipe],
  data => data
)

export const selectMountRecipe = createSelector(
  [selectRecipe],
  data => !!data.recipe
)