import recipeActionTypes from './recipe.types'

const INITIAL_STATE = {
  recipe: null,
  isFetching: false,
  errMessage: undefined
}

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case recipeActionTypes.FETCHING_RECIPE_START:
      return {
        ...state,
        isFetching: true
      }
    case recipeActionTypes.FETCH_SEARCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          recipe: action.payload
        }
    case recipeActionTypes.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        errMessage: action.payload
      }
    default:
      return state;
  }
}

export default recipeReducer;