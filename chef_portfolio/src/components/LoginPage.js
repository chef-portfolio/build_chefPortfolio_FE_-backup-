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

    console.log(response);
    console.log(jwt.decode(response.data.token));
    localStorage.setItem("access_token", response.data.token);

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
    margin: 2rem auto;
  }

  form {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      margin: 10px;
      font-size: 16px;
      text-align: center;
      padding: 1rem;
      border-radius: 10px;
      width: 70%;
    }
    button{
      padding: 1rem;
      width: 50%;
      margin: 0 auto;
      border-radius: 10px;
      background: blue;
      outline: none;
      color: white;
      font-size: 1rem;
    }
  }
  button{
    padding: 1rem;
    width: 10%;
    margin: 0 auto;
    border-radius: 10px;
    background: grey;
    outline: none;
    margin: 1rem;
    font-size: 1rem;
    color: white;
  }
  button:hover{
    color: white;
    background: rgb(61, 3, 13);
  }
`;
