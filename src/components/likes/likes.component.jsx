import React from 'react';
import { connect } from 'react-redux'

import { selectVisibleLikeList } from '../../redux/like/like.selector'
import LikePanel from '../likes-panel/like-panel.component'

import './likes.styles.scss';

const Likes = ({ visible }) => (
  <div className={`likes__field ${visible ? "visible" : ""}`}>
    <svg className="likes__icon">
      <use href="img/icons.svg#icon-heart"></use>
    </svg>
    <LikePanel />
  </div>
)

const mapStateToProps = state => ({
  visible: selectVisibleLikeList(state)
})

export default connect(mapStateToProps)(Likes);