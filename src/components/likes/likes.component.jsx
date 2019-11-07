import React from 'react';

import './likes.styles.scss';

const Likes = () => (
  <div className="likes__field">
    <svg className="likes__icon">
      <use href="img/icons.svg#icon-heart"></use>
    </svg>
  </div>
)

export default Likes;