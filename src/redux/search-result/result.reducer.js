import searchActionType from './search.types'

const INITIAL_STATE = {
  searchResults: null,
  renderCondition: "noFetch",
  errMessage: undefined
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case searchActionType.FETCH_SEARCH_START:
      return {
        ...state,
        renderCondition: "isFetching",
      }
    case searchActionType.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        renderCondition: "isFetched",
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