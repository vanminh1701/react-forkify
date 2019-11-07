import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectTimeServing,
  selectServings
} from "../../redux/recipe/recipe.selector";

import TinyButtons from "../tiny-buttons/tiny-buttons.component";

import "./recipe-info.styles.scss";

const RecipeInfo = ({ time, servings}) => {
  return (
    <div className="recipe__info-container">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href="../../img/icons.svg#icon-stopwatch"></use>
        </svg>
        <span className="recipe__info-data">{time}</span>
        <span className="recipe__info-text"> MINUTES</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href="../../img/icons.svg#icon-man"></use>
        </svg>
        <span className="recipe__info-data">{servings}</span>
        <span className="recipe__info-text"> SERVINGS</span>
        <TinyButtons />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  time: selectTimeServing,
  servings: selectServings
});
export default connect(mapStateToProps)(RecipeInfo);
