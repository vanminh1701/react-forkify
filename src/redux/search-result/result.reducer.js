import searchActionType from './search.types'

const INITIAL_STATE = {
  searchResults: null,
  isFetching: false,
  errMessage: undefined
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case searchActionType.FETCH_SEARCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case searchActionType.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchResults: action.payload
      }
    case searchActionType.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        errMessage: action.payload
      }
    default: 
      return state;
  }
}

export default searchReducer;