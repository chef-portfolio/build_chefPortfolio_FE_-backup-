import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class RecipePage extends React.Component {
  state = {
    recipe: this.props.recipes.filter(
      rec => rec.name === this.props.match.params.id
    )[0]
  };

  // temporary for styling purposes
  // state = {
  //   recipe: this.props.recipes[0]
  // };

  render() {
    return (
      <Recipe>
        <header>
          <h1>{this.state.recipe.name}</h1>

          <div className="header-contents">
            <div className="recipe-info">
              <img src={this.state.recipe.pic} alt="delicious foods!" />
              <p>
                {this.state.recipe.ingreds.length} ingredient recipe for{" "}
                {this.state.recipe.type}
              </p>
            </div>

            <div className="chef-info">
              <h3>Recipe By: {this.state.recipe.chef.name}</h3>
              <div className="card-contents">
                <img src={this.state.recipe.chef.pic} alt="Chef's Avatar" />
                <div className="info-box">
                  <h4>{this.state.recipe.chef.loc}</h4>
                  <h4>{this.state.recipe.chef.org}</h4>
                  <contact>{this.state.recipe.chef.contact}</contact>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Recipe>
    );
  }
}

export default withRouter(RecipePage);

const Recipe = styled.section`
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

      .chef-info {
        margin: 20px 0 0 20px;
        padding: 10px;
        border: 1px dashed darkgray;

        h3 {
          margin: 0 0 10px 0;
        }
        .card-contents {
          display: flex;

          .info-box {
            padding: 10px;
          }
        }
      }
    }
  }
`;
