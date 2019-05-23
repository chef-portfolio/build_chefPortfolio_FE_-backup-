import React from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../../data_sources/cp_backend";

export default class Register extends React.Component {
  state = {
    username: "",
    password: "",
    location: "",
    contact: "",
    img_url: ""
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  register = async ev => {
    ev.preventDefault();

    await axios.post(`${URL}/auth/register`, this.state);
    this.props.goBack();
  };

  render() {
    return (
      <SignUp>
        <h1>Sign Up</h1>
        <form onSubmit={this.register}>
          <input
            placeholder="username (required)"
            name="username"
            onChange={this.handleChange}
          />
          <input
            placeholder="password (required)"
            name="password"
            onChange={this.handleChange}
          />
          <input
            placeholder="location"
            name="location"
            onChange={this.handleChange}
          />
          <input
            placeholder="contact info"
            name="contact"
            onChange={this.handleChange}
          />
          <input
            placeholder="imgage URL"
            name="img_url"
            onChange={this.handleChange}
          />
          <button type="submit">Register</button>
        </form>
        <button onClick={this.props.goBack}>Back to Log-In</button>
      </SignUp>
    );
  }
}

const SignUp = styled.section`
  padding-top: 50px;
  h1 {
    margin: 0 auto;
  }

  form {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    input {
      margin: 10px;
      font-size: 16px;
      text-align: center;
    }
  }
`;
