import React from 'react'
import { connect } from 'react-redux'

import { selectLikeList } from '../../redux/like/like.selector'

import LikeItem from '../like-item/like-item.component'

import './like-panel.styles.scss'

const LikePanel = ({ likeList }) => {
  console.log("likeItemmmm", likeList)
  return (
    <div className="likes__panel">
      <ul className="likes__list">
      {
        likeList.map(item => (<LikeItem key={item.recipe_id} item={item} />
          ))
      }
      </ul>
  </div>
  )
}

const mapStateToProps = state => ({
  likeList: selectLikeList(state)
})

export default connect(mapStateToProps)(LikePanel)