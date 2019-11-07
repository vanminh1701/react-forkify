import { createSelector } from 'reselect'

const selectRecipe = state => state.recipe;

export const selectRecipeData = createSelector(
  [selectRecipe],
  recipe => recipe.recipe
)

export const selectRenderRecipeCondition = createSelector(
  [selectRecipe],
  recipe => recipe.renderCondition
)

export const selectTimeServing = createSelector(
  [selectRecipe],
  recipe => Math.ceil(recipe.recipe.ingredients.length / 3) * 15
)

export const selectRecipeIngredients = createSelector(
  [selectRecipeData],
  recipe => recipe.ingredients
)

export const selectServings = createSelector(
  [selectRecipe],
  recipe => recipe.servings
)

export const selectShoppingRenderCondition = createSelector(
  [selectRecipe],
  recipe => recipe.renderShopping
)

export const selectRecipeID = createSelector(
  [selectRecipe],
  recipe => recipe.recipe_id
)