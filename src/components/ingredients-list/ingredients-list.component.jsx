import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectRecipeIngredients } from "../../redux/recipe/recipe.selector";

import RecipeIngredient from "../recipe-ingredient/recipe-ingredient.component";

import "./ingredients-list.styles.scss";

const IngredientsList = ({ ingredients }) => (
  <ul className="recipe__ingredient-list">
    {
      ingredients.map(ingredient => (
        <RecipeIngredient key={ingredient.id} ingredient={ingredient} />
      ))
    }
  </ul>
);

const mapStateToProps = createStructuredSelector({
  ingredients: selectRecipeIngredients
});

export default connect(mapStateToProps)(IngredientsList);
