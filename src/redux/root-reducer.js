import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import resultReducer from './search-result/result.reducer'
import recipeReducer from './recipe/recipe.reducer'
import likeReducer from './like/like.reducer'

const persistConfig = {
  key: 'forkify3',
  storage,
  blacklist: ['recipe','like']
}
const rootReducer = combineReducers({
  result: resultReducer,
  recipe: recipeReducer,
  like: likeReducer
})

export default persistReducer(persistConfig, rootReducer);