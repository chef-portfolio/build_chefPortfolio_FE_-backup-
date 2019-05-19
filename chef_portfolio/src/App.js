import React from "react";
import logo from "./logo.svg";
import "./App.css";

import generate_data from "./mock_data/mock_data.js";
// let data = require("./mock_data/mock_data.js");

const data = generate_data();
let recipes = data.recipes;
console.log(recipes);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {recipes.map(recipe => (
          <h3>{recipe.name}</h3>
        ))}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
