import { key } from '../../config.api'
import searchActionType from './search.types'

const fetchSearchStart = () => ({
  type: searchActionType.FETCH_SEARCH_START
});

const fetchSearchSuccess = results => ({
  type: searchActionType.FETCH_SEARCH_SUCCESS,
  payload: results
})

const fetchSearchFailure = err => ({
  type: searchActionType.FETCH_SEARCH_FAILURE,
  payload: err
})

export const fetchSearchStartAsync = query => {
  return async dispatch => {
    dispatch(fetchSearchStart());
    try {
      const res = await 
        fetch(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
        .then(data => data.json())
        .then(data => data)
      dispatch(fetchSearchSuccess(res.recipes));
    } catch (error) {
      dispatch(fetchSearchFailure(error));
    }
  }
}