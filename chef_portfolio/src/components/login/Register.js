import React from "react";
import styled from "styled-components";

export default class Register extends React.Component {
  render() {
    return (
      <SignUp>
        <h1>Sign Up</h1>
      </SignUp>
    );
  }
}

const SignUp = styled.form`
  h1 {
    margin: 0 auto;
  }
`;
