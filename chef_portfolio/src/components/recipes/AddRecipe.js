import React from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../../data_sources/cp_backend";

class AddRecipe extends React.Component {
  state = {
    title: "",
    mealType: "breakfast",
    instructions: "",
    img_url: "",
    chef_id: this.props.decoded.subject
  };

  addRecipe = ev => {
    axios.post(`${URL}/recipes`, this.state);
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.addRecipe}>
        <h2>Add a Recipe!</h2>
        <input
          placeholder="recipe title"
          name="title"
          onChange={this.handleChange}
        />
        <textarea
          placeholder="instructions"
          name="instructions"
          onChange={this.handleChange}
        />
        <input
          placeholder="image URL"
          name="img_url"
          onChange={this.handleChange}
        />
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
        <button type="submit">Add Recipe</button>
      </Form>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 700px;
  max-width: 90vw;

  input,
  textarea,
  select,
  option {
    text-align: center;
    font-size: 16px;
    text-align-last: center;
  }

  textarea {
    min-height: 200px;
  }

  button {
    margin-top: 20px;
    font-size: 16px;
    width: 200px;
    height: 50px;
    align-self: center;
  }
`;

export default AddRecipe;
