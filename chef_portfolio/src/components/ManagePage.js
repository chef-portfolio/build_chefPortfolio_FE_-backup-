import React from "react";
import styled from "styled-components";
import Login_HOC from "./Login_HOC";
import { withRouter } from "react-router-dom";

import ChefCard from "./chefs/ChefCard";
import RecipeCard from "./recipes/RecipeCard";
import AddRecipe from "./recipes/AddRecipe";

class ManagePage extends React.Component {
  state = {
    chef: this.props.chefs[0],
    recipes: this.props.recipes
    // .filter(
    //   recipe => recipe.chef.name === this.props.chefs[0].name
    // )
  };

  componentDidUpdate(prevProps) {
    if (prevProps.recipes != this.props.recipes) {
      this.setState({ recipes: this.props.recipes });
    }
  }

  editRecipe = (ev, name) => {
    console.log(name);
    this.props.history.push(`/edit/${name}`);
  };

  render() {
    return (
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
    );
  }
}

export default Login_HOC(withRouter(ManagePage));

const Manage = styled.section`
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
