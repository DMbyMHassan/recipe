import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import AllRecipes from './pages/AllRecipes';
import NewRecipe from './pages/NewRecipe';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Website</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">All Recipes</Link>
            </li>
            <li>
              <Link to="/new-recipe">New Recipe</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/" exact component={AllRecipes} />
        <Route path="/new-recipe" component={NewRecipe} />
      </Switch>
    </Router>
  );
}

export default App;

