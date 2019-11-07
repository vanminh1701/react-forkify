import { createSelector } from 'reselect'

const selectLike = state => state.like;

export const selectLikeList = createSelector(
  [selectLike],
  like => like.likeList
)

export const selectVisibleLikeList = createSelector(
  [selectLikeList],
  array => array.length
)
