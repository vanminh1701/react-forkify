import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectRecipeData } from '../../redux/recipe/recipe.selector'

import RecipeFigure from '../recipe-figure/recipe-figure.component'
import RecipeDetails from '../recipe-details/recipe-details.component'
import RecipeIngredients from '../recipe-ingredients/recipe-ingredients.component'
import RecipeDirections from '../recipe-directions/recipe-directions.component'

import './recipe.styles.scss'

const Recipe = ({ recipe }) => {
  const { image_url,title, publisher, publisher_url } = recipe;
  return (
    <div className="recipe">
      <RecipeFigure image_url={image_url} title={title} />
      <RecipeDetails />
      <RecipeIngredients />
      <RecipeDirections publisher={publisher} publisher_url={publisher_url}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  recipe: selectRecipeData
})

export default connect(mapStateToProps)(Recipe);