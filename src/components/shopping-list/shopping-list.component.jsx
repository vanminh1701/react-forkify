import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectRecipeIngredients } from '../../redux/recipe/recipe.selector'

import ShoppingItem from '../shopping-item/shopping-item.component'

import './shopping-list.styles.scss'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.ingredients
    }
}

  handleClick = idDelete => this.setState({ 
    ingredients: this.state.ingredients.filter(el => el.id !== idDelete) 
  }) 

  render() {
  return (
    <ul className="shopping__list">
    {
      this.state.ingredients.map(ingredient => (
        <ShoppingItem 
          key={ingredient.id} 
          ingredient={ingredient} 
          handleClick={this.handleClick}
          />
      ))
    }
    </ul>
  )
}
}

const mapStateToProps = createStructuredSelector({
  ingredients: selectRecipeIngredients
})

export default connect(mapStateToProps)(ShoppingList);