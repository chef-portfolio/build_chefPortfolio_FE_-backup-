import React from "react";
import styled from "styled-components";
import RecipeCard from "./recipes/RecipeCard";
import generate_data from "../mock_data/mock_data";
import SearchForm from "./search/SearchForm";

const data = generate_data();
let recipes = data.recipes;

export default class SearchPage extends React.Component {
  state = {
    searchInput: "",
    searchType: "recipes",
    mealType: "all",
    recipeList: []
  };

  componentDidMount() {
    this.setState({ recipeList: recipes });
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  search = ev => {
    ev.preventDefault();
    let searchType = this.state.searchType;
    let searchInput = this.state.searchInput;
    let mealType = this.state.mealType;

    function filterRecipes(recipe) {
      let isMatch = true;

      if (searchType == "recipes") {
        isMatch = recipe.name.toUpperCase().includes(searchInput.toUpperCase());
      } else if (searchType == "chefs") {
        isMatch = recipe.chef.name
          .toUpperCase()
          .includes(searchInput.toUpperCase());
      } else if (searchType == "ingredients") {
        isMatch = recipe.ingreds
          .join("")
          .toUpperCase()
          .includes(searchInput.toUpperCase());
      }

      if (mealType != "all") {
        if (mealType != recipe.type) {
          isMatch = false;
        }
      }

      return isMatch;
    }

    this.setState({
      recipeList: recipes.filter(recipe => filterRecipes(recipe))
    });
  };

  render() {
    return (
      <>
        <SearchForm
          state={this.state}
          handleChange={this.handleChange}
          search={this.search}
        />
        <SearchResults>
          {this.state.recipeList.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={recipe.name} />
          ))}
        </SearchResults>
      </>
    );
  }
}

const SearchResults = styled.section`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
  justify-content: center;
`;
