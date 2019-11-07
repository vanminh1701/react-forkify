import React from 'react'
import { connect } from 'react-redux'

import { deleteIngredient } from '../../redux/recipe/recipe.action'

import './shopping-item.styles.scss'



const ShoppingItem = ({ ingredient, dispatch, handleClick }) => { 
  const { unit, content, count, id } = ingredient;
  return (
    <li className="shopping__item">
      <div className="shopping__count">
        <input type="number" defaultValue={count} step={count} min="0" />
        <p>{unit}</p>
      </div>

      <p className="shopping__description">{content}</p>
      
      <button 
        className="shopping__delete btn-tiny"
        onClick={() => handleClick(id)}  
      >
        <svg>
          <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
      </button>
    </li>
  )
}

export default connect()(ShoppingItem);

// class ShoppingItem extends React.Component { 
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       count: this.props.ingredient.count
//     }
//   }

//   handeChange = event => console.log(event.target)

//   render() {
//     const { unit, content } = this.props.ingredient;
//     const count = this.state.count;
//     return (
//       <li className="shopping__item">
//         <div className="shopping__count">
//           <input type="number" defaultValue={count} step={this.props.ingredient.count} onChange={this.handleChange} />
//           <p>{unit}</p>
//         </div>

//         <p className="shopping__description">{content}</p>
        
//         <button className="shopping__delete btn-tiny">
//           <svg>
//             <use href="img/icons.svg#icon-circle-with-cross"></use>
//           </svg>
//         </button>
//       </li>
//     )
//   }
// }
