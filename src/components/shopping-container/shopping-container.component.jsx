import { connect } from 'react-redux';
import { compose } from 'redux'

import { selectShoppingRenderCondition } from '../../redux/recipe/recipe.selector'

import Shopping from '../shopping/shopping.component'
import WithRender from '../with-render/with-render.component';


const mapStateToProps = state => ({
  renderCondition: selectShoppingRenderCondition(state)
})

const ShoppingContainer = compose(
  connect(mapStateToProps),
  WithRender
  )(Shopping)
export default ShoppingContainer;
