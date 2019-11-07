import React from 'react'

import Loader from '../loader/loader.component'

const WithRender = WrapedComponent => ({ renderCondition, ...otherProps }) => {
  switch(renderCondition) {
    case "isFetched":
    case true:
      return (
        <WrapedComponent {...otherProps} />
      )
    case "isFetching":
      return (
        <Loader />
      )
    default:
      return ('')
  }
}
export default WithRender;