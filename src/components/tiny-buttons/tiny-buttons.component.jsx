import React from 'react'
import { connect } from 'react-redux'

import { selectServings } from '../../redux/recipe/recipe.selector'
import { plusServings, minusServings } from '../../redux/recipe/recipe.action'

import TinyButton from '../tiny-button/tiny-button.component'

import './tiny-buttons.styles.scss'

const checkServings = (servings, minusServings) => {
  if (!(servings === 1)) return minusServings;
}

const TinyButtons = ({ plusServings, minusServings, servings }) => (
  <div className="recipe__info-buttons">
      <TinyButton 
        shape={"minus"} 
        changeServings={checkServings(servings, minusServings)}
      />
      <TinyButton shape={"plus"} changeServings={plusServings}/>
  </div>
)

const mapStateToProps = state => ({
  servings: selectServings(state)
})

const mapDispatchToProps = dispatch => ({
  plusServings: () => dispatch(plusServings()),
  minusServings: () => dispatch(minusServings())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TinyButtons);