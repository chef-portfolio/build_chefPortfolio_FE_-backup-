import React from "react";
import styled from "styled-components";
import Login_HOC from "./Login_HOC";
import { withRouter, Route, Router } from "react-router-dom";

import ChefCard from "./chefs/ChefCard";
import RecipeCard from "./recipes/RecipeCard";
import AddRecipe from "./recipes/AddRecipe";
import EditRecipePage from "./EditRecipe";

class ManagePage extends React.Component {
  state = {
    recipes: [],
    chef: {}
  };

  componentDidMount() {
    if (this.props.recipes.length > 0) {
      this.setState({
        recipes: this.props.recipes.filter(
          recipe => recipe.chef.id === this.props.decoded.subject
        ),
        chef: this.props.chefs[this.props.decoded.subject]
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.recipes != this.props.recipes) {
      this.setState({
        recipes: this.props.recipes.filter(
          recipe => recipe.chef.id === this.props.decoded.subject
        ),
        chef: this.props.chefs[this.props.decoded.subject]
      });
    }
  }

  editRecipe = (ev, name) => {
    this.props.history.push(`/manage/edit/${name}`);
  };

  render() {
    return (
      <>
        <Route
          exact
          path="/manage"
          render={props => (
            <Manage>
              <h1>Manage Page</h1>
              <button onClick={this.props.logOut}>Log Out</button>
              <ChefCard chef={this.state.chef} />

              <div className="recipe-list">
                {this.state.recipes.map(recipe => (
                  <RecipeCard recipe={recipe} viewRecipe={this.editRecipe} />
                ))}
              </div>
              <AddRecipe decoded={this.props.decoded} />
            </Manage>
          )}
        />
        <Route
          exact
          path="/manage/edit/:id"
          render={props => (
            <EditRecipePage
              recipes={this.state.recipes}
              decoded={this.props.decoded}
              getRecipes={this.props.getRecipes}
            />
          )}
        />
      </>
    );
  }
}

export default Login_HOC(withRouter(ManagePage));

const Manage = styled.section`
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0 auto;
  }

  .recipe-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1500px;
    justify-content: center;
  }
`;
