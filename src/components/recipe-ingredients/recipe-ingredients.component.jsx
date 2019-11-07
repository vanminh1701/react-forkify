import React from 'react'
import { connect } from 'react-redux'

import { renderShopping } from '../../redux/recipe/recipe.action'

import IngredientsList from '../ingredients-list/ingredients-list.component'
import CustomButton from '../custom-button/custom-button.component'

import './recipe-ingredients.styles.scss'

const RecipeIngredients = ({ renderShopping }) => (
  <div className="recipe__ingredients">
    <IngredientsList />
    <CustomButton 
      type="button" 
      shape={"shopping-cart"} 
      chidren={"Add to shopping list"} 
      renderShopping={renderShopping}
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  renderShopping: () => dispatch(renderShopping())
})

// export default connect(mapStateToProps)(RecipeIngredients);
export default connect(null, mapDispatchToProps)(RecipeIngredients);