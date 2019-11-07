import likeActionType from './like.type'

export const likeRecipe = recipe => ({
  type: likeActionType.LIKE_RECIPE,
  payload: recipe
});

export const unlikeRecipe = recipe => ({
  type: likeActionType.UNLIKE_RECIPE,
  payload: recipe
})