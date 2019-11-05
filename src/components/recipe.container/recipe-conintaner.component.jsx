import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectMountRecipe } from '../../redux/recipe/recipe.selector'
import Recipe from '../recipe/recipe.component'


const RecipeContainer = ({ mountRecipe }) => {
  return mountRecipe ? (<Recipe />) : ''
}

const mapStateToProps = createStructuredSelector({
  mountRecipe: selectMountRecipe
})

export default connect(mapStateToProps)(RecipeContainer);