import React from "react";
import styled from "styled-components";
import axios from "axios";
import Register from "./login/Register";
import { URL } from "../data_sources/cp_backend";
import jwt from "jsonwebtoken";

export default class LoginPage extends React.Component {
  state = {
    signUp: false,
    username: "",
    password: ""
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  logIn = async ev => {
    ev.preventDefault();
    let info = {
      username: this.state.username,
      password: this.state.password
    };

    let response = await axios.post(`${URL}/auth/login`, info);

    let token = response.data.token;
    localStorage.setItem("access_token", token);

    this.props.logIn();
  };

  toggleRegister = ev => {
    this.setState({ signUp: !this.state.signUp });
  };

  render() {
    return (
      <>
        {this.state.signUp ? (
          <Register goBack={this.toggleRegister} />
        ) : (
          <Login>
            <h1>Login Page</h1>
            <form onSubmit={this.logIn}>
              <input
                placeholder="username"
                name="username"
                onChange={this.handleChange}
              />
              <input
                placeholder="password"
                name="password"
                onChange={this.handleChange}
                type="password"
              />
              <button type="submit">Log In</button>
            </form>
            <button onClick={this.toggleRegister}>Sign Up</button>
          </Login>
        )}
      </>
    );
  }
}

const Login = styled.section`
  h1 {
    margin: 0 auto;
  }

  form {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      min-width: 300px;
      margin: 10px;
      font-size: 16px;
      text-align: center;
    }

    button {
      max-width: 100px;
    }
  }
`;
