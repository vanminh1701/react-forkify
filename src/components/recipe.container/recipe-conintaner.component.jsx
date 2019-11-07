import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectRenderRecipeCondition } from '../../redux/recipe/recipe.selector'
import Recipe from '../recipe/recipe.component'
import WithRender from '../with-render/with-render.component'


const mapStateToProps = createStructuredSelector({
  renderCondition: selectRenderRecipeCondition
})

const RecipeContainer = connect(mapStateToProps)(WithRender(Recipe));
export default RecipeContainer;