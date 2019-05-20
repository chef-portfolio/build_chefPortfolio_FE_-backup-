import React from "react";
import styled from "styled-components";

import Register from "./login/Register";

export default class LoginPage extends React.Component {
  state = {
    signUp: false
  };

  logIn = ev => {
    ev.preventDefault();
    this.props.logIn();
  };

  stageRegister = ev => {
    this.setState({ signUp: true });
  };

  render() {
    return (
      <>
        {this.state.signUp ? (
          <Register />
        ) : (
          <Login>
            <h1>Login Page</h1>
            <form onSubmit={this.logIn}>
              <input placeholder="username" />
              <input placeholder="password" />
              <button type="submit">Log In</button>
            </form>
            <button onClick={this.stageRegister}>Sign Up</button>
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
`;
