import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectLikeList } from '../../redux/like/like.selector'
import { likeRecipe, unlikeRecipe } from '../../redux/like/like.action'

import './love-button.styles.scss'

const handleClick = id => {
  
}

const LoveButton = ({ dispatch }) => (
  <button 
    className="recipe__love"
    onClick={() => dispatch(handleClick(id))}
  >
      <svg className="header__likes">
          <use href="../../img/icons.svg#icon-heart-outlined"></use>
      </svg>
  </button>
)

const mapStateToProps = createStructuredSelector({
  likeList: selectLikeList
})

export default connect(mapStateToProps)(LoveButton);