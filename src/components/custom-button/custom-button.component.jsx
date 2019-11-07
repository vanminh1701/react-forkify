import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({shape, chidren, invert, renderShopping }) => (
  <button 
    className={`btn ${invert ? 'invert' : ''}`}
    onClick={() => {
      if (renderShopping) renderShopping()
    }}
  >
    <svg className="search__icon">
      <use href={`../../img/icons.svg#icon-${shape}`} />
    </svg>
    <span>{chidren}</span>
  </button>
)

export default CustomButton;