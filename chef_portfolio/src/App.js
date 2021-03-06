import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { URL } from "./data_sources/cp_backend";

// components
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import ManagePage from "./components/ManagePage";
import RecipePage from "./components/RecipePage";
import EditRecipePage from "./components/EditRecipe";

// create-react-app bootstrapped items
import "./App.css";

// temporary MOCK data
// import generate_data from "./mock_data/mock_data";
// const data = generate_data();
// let recipes = data.recipes;
// let chefs = data.chefs;

class App extends React.Component {
  state = {
    recipes: [],
    chefs: {}
  };

  async componentDidMount() {
    this.getRecipes();
  }

  getRecipes = async () => {
    let res = await axios.get(`${URL}/recipes`);
    let recipes = res.data;
    // console.log(recipes);

    res = await axios.get(`${URL}/users`);
    let chefsArr = res.data;

    let chefsTable = {};
    for (let i = 0; i < chefsArr.length; i++) {
      chefsTable[chefsArr[i].id] = chefsArr[i];
    }

    for (let i = 0; i < recipes.length; i++) {
      recipes[i] = { ...recipes[i], chef: chefsTable[recipes[i].chef_id] };
    }

    this.setState({ recipes, chefs: chefsTable });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route
            exact
            path="/"
            render={props => <SearchPage recipes={this.state.recipes} />}
          />
          <Route
            path="/manage"
            render={props => (
              <ManagePage
                chefs={this.state.chefs}
                recipes={this.state.recipes}
                getRecipes={this.getRecipes}
              />
            )}
          />
          <Route
            path="/recipe/:id"
            render={props => <RecipePage recipes={this.state.recipes} />}
          />
          {/* <Route
            path="/edit/:id"
            render={props => <EditRecipePage recipes={this.state.recipes} />}
          /> */}
        </div>
      </Router>
    );
  }
}

export default App;
