import React from 'react'

import './custom-button.styles.scss'

const CustomButton = () => (
  <button className="search__btn btn">
    <svg className="search__icon">
      <use href="../../img/icons.svg#icon-magnifying-glass" />
    </svg>
    <span>SEARCH</span>
  </button>
)

export default CustomButton;