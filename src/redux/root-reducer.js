import { combineReducers } from 'redux'

import resultReducer from './search-result/result.reducer'
import recipeReducer from './recipe/recipe.reducer'

const rootReducer = combineReducers({
  result: resultReducer,
  recipe: recipeReducer
})

export default rootReducer;