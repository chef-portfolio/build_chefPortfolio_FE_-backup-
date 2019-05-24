import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ChefCard from "./chefs/ChefCard";

class RecipePage extends React.Component {
  state = {
    recipe: { ingredient_list: [] }
  };

  componentDidMount() {
    if (this.props.recipes.length > 0) {
      this.setState({
        recipe: this.props.recipes.filter(
          rec => rec.title === this.props.match.params.id
        )[0]
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.recipes != this.props.recipes) {
      this.setState({
        recipe: this.props.recipes.filter(
          rec => rec.title === this.props.match.params.id
        )[0]
      });
    }
  }

  render() {
    return (
      <Recipe>
        <header>
          <h1>{this.state.recipe.title}</h1>

          <div className="header-contents">
            <div className="recipe-info">
              <img src={this.state.recipe.img_url} alt="delicious foods!" />
              <p>
                {this.state.recipe.ingredient_list.length} ingredient recipe for{" "}
                {this.state.recipe.mealType}
              </p>
            </div>

            <div>
              <h4>Recipe By:</h4>
              {/* <ChefCard chef={this.state.recipe.chef} /> */}
            </div>
          </div>
        </header>
        <h3>Ingredients</h3>
        <ul>
          {this.state.recipe.ingredient_list.map(ing => (
            <li>{ing.ingredient}</li>
          ))}
        </ul>
        <h3> Directions </h3>
        <p>{this.state.recipe.instructions}</p>
      </Recipe>
    );
  }
}

export default withRouter(RecipePage);

const Recipe = styled.section`
  padding-bottom: 200px;
  header {
    h1 {
      margin: 0 auto;
      font-size: 46px;
    }

    .header-contents {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }

  ul {
    margin: 0 auto;
    width: 400px;
    /* width: auto; */
    max-width: 90%;
  }
  p {
    white-space: pre-wrap;
  }
`;
