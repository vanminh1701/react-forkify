import React from 'react'

import './love-button.styles.scss'

const LoveButton = () => (
  <button className="recipe__love">
      <svg className="header__likes">
          <use href="../../img/icons.svg#icon-heart-outlined"></use>
      </svg>
  </button>
)

export default LoveButton;