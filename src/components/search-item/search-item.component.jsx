import React from "react";
import { limitRecipeTitle } from './search-item.utils'
import './search-item.styles.scss'

const SearchItem = ({ result }) => {
  const { image_url, title, publisher } = result;
  return (
    <div
      className="results__link"
      onClick={() => console.log("Lay du lieu HashUrl")}
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

export default SearchItem;