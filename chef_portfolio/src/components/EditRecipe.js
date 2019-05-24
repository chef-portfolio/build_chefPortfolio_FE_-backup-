import React from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { URL } from "../data_sources/cp_backend";

import ChefCard from "./chefs/ChefCard";

class EditRecipePage extends React.Component {
  state = {
    recipe: { ingredient_list: [] },
    title: "",
    mealType: "breakfast",
    instructions: "",
    img_url: "",
    chef_id: this.props.decoded.subject,
    ingredient: ""
  };

  componentDidMount() {
    if (this.props.recipes.length > 0) {
      let recipe = this.props.recipes.filter(
        rec => rec.title === this.props.match.params.id
      )[0];
      this.setState({
        recipe,
        ...recipe
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.recipes != this.props.recipes) {
      let recipe = this.props.recipes.filter(
        rec => rec.title === this.props.match.params.id
      )[0];
      this.setState({
        recipe,
        ...recipe
      });
    }
  }

  updateRecipe = async ev => {
    ev.preventDefault();
    let updates = {
      title: this.state.title,
      img_url: this.state.img_url,
      instructions: this.state.instructions,
      mealType: this.state.mealType
    };
    await axios.put(`${URL}/recipes/${this.state.id}`, updates);

    this.props.history.push("/manage");
    this.props.getRecipes();
  };

  addIngredient = async ev => {
    ev.preventDefault();
    let toInsert = {
      ingredient: this.state.ingredient,
      recipe_id: this.state.id
    };
    await axios.post(`${URL}/ingredients`, toInsert);
    this.setState({ ingredient: "" });
    this.props.getRecipes();
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <Recipe>
        <form onSubmit={this.updateRecipe}>
          <h1>{this.state.recipe.title}</h1>
          <h4>Title</h4>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <div className="form-contents">
            <div className="recipe-info">
              <img src={this.state.recipe.img_url} alt="delicious foods!" />
              <h4>Image URL</h4>
              <input
                name="img_url"
                value={this.state.img_url}
                onChange={this.handleChange}
              />

              <h4>Meal Type</h4>
              <select
                name="mealType"
                value={this.state.mealType}
                onChange={this.handleChange}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
              </select>
              <h4>Instructions</h4>
              <textarea
                name="instructions"
                value={this.state.instructions}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit">Update Recipe</button>
        </form>
        <form onSubmit={this.addIngredient}>
          <h4>Ingredients</h4>
          <ul>
            {this.state.recipe.ingredient_list.map(ing => (
              <li>{ing.ingredient}</li>
            ))}
          </ul>
          <input
            name="ingredient"
            placeholder="ingredient"
            onChange={this.handleChange}
            value={this.state.ingredient}
          />
          <button type="submit">Add Ingredient</button>
        </form>
      </Recipe>
    );
  }
}

export default withRouter(EditRecipePage);

const Recipe = styled.section`
  padding-bottom: 200px;
  form {
    h1 {
      margin: 0 auto;
      font-size: 46px;
    }

    .form-contents {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-start;

      input,
      textarea {
        font-size: 16px;
        width: 500px;
        max-width: 90%;
      }
      textarea {
        height: 200px;
      }
    }

    ul {
      width: 300px;
      max-width: 90%;
      margin: 30px auto;
    }
  }
`;
