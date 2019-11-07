import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectLikeList } from '../../redux/like/like.selector'
import { selectRecipeData } from '../../redux/recipe/recipe.selector'
import { likeRecipe, unlikeRecipe } from '../../redux/like/like.action'

import './love-button.styles.scss'

const handleClick = (recipe, list) => {
  const recipeID = recipe.recipe_id;
  if(!list.length || (list.findIndex(el => el.recipe_id === recipeID) === -1)) {
    recipe.isLike = true;
    list.push(recipe)
    return likeRecipe(list.slice());
  } else {
    return unlikeRecipe(list.filter(el => el.recipe_id !== recipeID));
  }
}

const LoveButton = ({ dispatch, recipe, likeList }) => (
  <button 
    className="recipe__love"
    onClick={() => dispatch(handleClick(recipe, likeList))}
  >
      <svg className="header__likes">
          <use href={`../../img/icons.svg#icon-heart${!!likeList.find(el => el.recipe_id === recipe.recipe_id) ? "" : "-outlined"}`}></use>
      </svg>
  </button>
)

const mapStateToProps = createStructuredSelector({
  likeList: selectLikeList,
  recipe: selectRecipeData
})

export default connect(mapStateToProps)(LoveButton);