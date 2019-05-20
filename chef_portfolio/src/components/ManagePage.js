import React from "react";
import styled from "styled-components";
import Login_HOC from "./Login_HOC";

class ManagePage extends React.Component {
  render() {
    return (
      <Manage>
        <h1>Manage Page</h1>
        <button onClick={this.props.logOut}>Log Out</button>
      </Manage>
    );
  }
}

export default Login_HOC(ManagePage);

const Manage = styled.section`
  h1 {
    margin: 0 auto;
  }
`;
