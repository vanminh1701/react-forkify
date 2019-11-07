import likeActionType from './like.type'

const INITIAL_STATE = {
  likeList: null
};

const likeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case likeActionType.LIKE_RECIPE:
      return {
        ...state,
        likeList: state.likeList.push(action.payload)
      }
    case likeActionType.UNLIKE_RECIPE:
      return {
        ...state,
        likeList: state.likeList.filter(el => el.id !== action.payload)
      }
    default:
      return state
  }
}

export default likeReducer;