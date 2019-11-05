import React from 'react';

import './homepage.styles.scss';
import Header from '../../components/header/header.component'
import SearchResultContainer from '../../components/search-result-container/search-result.container'
import RecipeContainer from '../../components/recipe.container/recipe-conintaner.component'


const HomePage = ({ mountSearch }) => (
  <div className="container">
    <Header />
    <SearchResultContainer />
    <RecipeContainer />
    
  </div>
)

export default HomePage;