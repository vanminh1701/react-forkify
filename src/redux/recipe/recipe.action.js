import { key } from '../../config.api'
import recipeActionTypes from './recipe.types'

const fetchSearchStart = () => ({
  type: recipeActionTypes.FETCH_SEARCH_START
});

const fetchSearchSuccess = results => ({
  type: recipeActionTypes.FETCH_SEARCH_SUCCESS,
  payload: results
})

const fetchSearchFailure = err => ({
  type: recipeActionTypes.FETCH_SEARCH_FAILURE,
  payload: err
})

export const fetchSearchStartAsync = id => {
  return async dispatch => {
    dispatch(fetchSearchStart());
    try {
      const res = await 
        fetch(`https://www.food2fork.com/api/get?key=${key}&rId=${id}`)
        .then(data => data.json())
        .then(data => data)
      dispatch(fetchSearchSuccess(res.recipes));
    } catch (error) {
      dispatch(fetchSearchFailure(error));
    }
  }
}