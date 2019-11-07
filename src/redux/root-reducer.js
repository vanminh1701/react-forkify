import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import resultReducer from './search-result/result.reducer'
import recipeReducer from './recipe/recipe.reducer'

const persistConfig = {
  key: 'forkify2',
  storage,
  blacklist: ['recipe']
}
const rootReducer = combineReducers({
  result: resultReducer,
  recipe: recipeReducer
})

export default persistReducer(persistConfig, rootReducer);