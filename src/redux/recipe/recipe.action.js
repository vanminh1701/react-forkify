import { key } from '../../config.api'
import recipeActionTypes from './recipe.types'

import { parseIngrdients } from './recipe.utils'

const fetchRecipeStart = () => ({
  type: recipeActionTypes.FETCHING_RECIPE_START
});

const fetchRecipeSuccess = recipe => ({
  type: recipeActionTypes.FETCHING_RECIPE_SUCCESS,
  payload: recipe
})

const fetchRecipeFailure = err => ({
  type: recipeActionTypes.FETCHING_RECIPE_FAILURE,
  payload: err
})

export const fetchRecipeStartAsync = id => {
  return async dispatch => {
    dispatch(fetchRecipeStart());
    try {
      let recipe = await 
        fetch(`https://www.food2fork.com/api/get?key=${key}&rId=${id}`)
        .then(data => data.json())
        .then(data => data.recipe)
      recipe.ingredients = parseIngrdients(recipe.ingredients);
      // console.log("RECIPE", recipe)
      dispatch(fetchRecipeSuccess(recipe));
    } catch (error) {
      dispatch(fetchRecipeFailure(error));
    }
  }
}

export const plusServings = () => ({
  type: recipeActionTypes.PLUS_SERVINGS
})

export const minusServings = () => ({
  type: recipeActionTypes.MINUS_SERVINGS
})

export const renderShopping = () => ({
  type: recipeActionTypes.RENDER_SHOPPING
})

export const deleteIngredient = id => ({
  type: recipeActionTypes.DELETE_INGREDIENT,
  payload: id
})