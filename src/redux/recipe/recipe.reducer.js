import recipeActionTypes from './recipe.types'

import { updateServings, deleteIngredient } from './recipe.utils'

const INITIAL_STATE = {
  recipe: null,
  renderCondition: "noFetch",
  errMessage: undefined,
  servings: 4,
  renderShopping: false
}

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case recipeActionTypes.FETCHING_RECIPE_START:
      return {
        ...state,
        renderCondition: "isFetching",
        renderShopping: false
      }
    case recipeActionTypes.FETCHING_RECIPE_SUCCESS:
        return {
          ...state,
          renderCondition: "isFetched",
          recipe: action.payload
        }
    case recipeActionTypes.FETCHING_RECIPE_FAILURE:
      return {
        ...state,
        errMessage: action.payload
      }
    case recipeActionTypes.PLUS_SERVINGS:
      return {
        ...state,
        recipe: updateServings(state.recipe, state.servings, "plus"),
        servings: state.servings + 1
      }
    case recipeActionTypes.MINUS_SERVINGS:
      return {
        ...state,
        recipe: updateServings(state.recipe, state.servings, "minus"),
        servings: state.servings - 1
      }
    case recipeActionTypes.RENDER_SHOPPING:
      return {
        ...state,
        renderShopping: true
      }
    case recipeActionTypes.DELETE_INGREDIENT:
      return {
        ...state,
        recipe: deleteIngredient(state.recipe, action.payload)
      }
    default:
      return state;
  }
}

export default recipeReducer;