import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectRecipeIngredients } from '../../redux/recipe/recipe.selector'

import RecipeInfo from '../recipe-info/recipe-info.component'
import LoveButton from '../love-button/love-button.component'

import './recipe-details.styles.scss'

const RecipeDetails = ({ ingredients }) => (
  <div className="recipe__details">
    <RecipeInfo />
    <LoveButton />
  </div>
)

const mapStateToProps = createStructuredSelector({
  ingredients: selectRecipeIngredients
})

export default connect(mapStateToProps)(RecipeDetails);