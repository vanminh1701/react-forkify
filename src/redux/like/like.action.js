import likeActionType from './like.type'

export const likeRecipe = id => ({
  type: likeActionType.LIKE_RECIPE,
  payload: id
});

export const unlikeRecipe = id => ({
  type: likeActionType.UNLIKE_RECIPE,
  payload: id
})