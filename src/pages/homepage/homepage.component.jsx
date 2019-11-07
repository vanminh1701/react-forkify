import React from 'react';

import './homepage.styles.scss';
import Header from '../../components/header/header.component'
import SearchResultContainer from '../../components/search-result-container/search-result.container'
import RecipeContainer from '../../components/recipe.container/recipe-conintaner.component'
import ShoppingContainer from '../../components/shopping-container/shopping-container.component'


const HomePage = () => (
  <div className="container">
    <Header />
    <SearchResultContainer />
    <RecipeContainer />
    <ShoppingContainer />
  </div>
)

export default HomePage;