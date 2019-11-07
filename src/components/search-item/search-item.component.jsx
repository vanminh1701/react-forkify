import React from 'react'
import { connect } from 'react-redux'
import { limitRecipeTitle } from './search-item.utils'
import { fetchRecipeStartAsync } from '../../redux/recipe/recipe.action'

import './search-item.styles.scss'

const SearchItem = ({ result, fetchRecipeStartAsync }) => {
  const { image_url, title, publisher, recipe_id } = result;
  return (
    <div
      className="results__link"
      onClick={() => {
        fetchRecipeStartAsync(recipe_id);
      }}
    >
      <figure className="results__fig">
        <img src={image_url} alt="Test" />>
      </figure>
      <div className="results__data">
        <h4 className="results__name">{limitRecipeTitle(title)}</h4>
        <span className="results__author">{publisher}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchRecipeStartAsync: id => dispatch(fetchRecipeStartAsync(id))
})

export default connect(null, mapDispatchToProps)(SearchItem);