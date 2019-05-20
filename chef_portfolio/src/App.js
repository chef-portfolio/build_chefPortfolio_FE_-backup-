import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// components
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import ManagePage from "./components/ManagePage";

// create-react-app bootstrapped items
import logo from "./logo.svg";
import "./App.css";

// temporary MOCK data
import generate_data from "./mock_data/mock_data";
const data = generate_data();
let recipes = data.recipes;

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <SearchPage recipes={recipes} />}
        />
        <Route path="/manage" render={props => <ManagePage />} />
      </div>
    </Router>
  );
}

export default App;
