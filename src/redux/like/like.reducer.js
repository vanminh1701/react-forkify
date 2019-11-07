import likeActionType from './like.type'

const INITIAL_STATE = {
  likeList: []
};

const likeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case likeActionType.LIKE_RECIPE:
      return {
        ...state,
        likeList: action.payload
      }
    case likeActionType.UNLIKE_RECIPE:
      return {
        ...state,
        likeList: action.payload
      }
    default:
      return state 
  }
}

export default likeReducer;