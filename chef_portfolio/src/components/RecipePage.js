import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class RecipePage extends React.Component {
  state = {
    recipe: this.props.recipes.filter(
      rec => rec.name === this.props.match.params.id
    )[0]
  };

  render() {
    return (
      <Recipe>
        <h1>{this.state.recipe.name}</h1>
        <p>{this.state.recipe.type}</p>
        <img src={this.state.recipe.pic} alt="delicious foods!" />
        <p>{this.state.recipe.ingreds.length} ingredients</p>
        <p>Recipe by: {this.state.recipe.chef.name}</p>
      </Recipe>
    );
  }
}

export default withRouter(RecipePage);

const Recipe = styled.section`
  h1 {
    margin: 0 auto;
  }
`;
