import React from "react";
import LoginPage from "./LoginPage";
import jwt from "jsonwebtoken";

const Login_HOC = App =>
  class extends React.Component {
    state = {
      isLoggedIn: false
    };

    componentDidMount() {
      let token = localStorage.getItem("access_token");

      if (token) {
        let decoded = jwt.decode(token);

        if (Date.now() / 1000 < decoded.exp) {
          this.logIn();
        } else {
          localStorage.removeItem("access_token");
        }
      }
    }

    logIn = ev => {
      this.setState({ isLoggedIn: true });
    };

    logOut = () => {
      this.setState({ isLoggedIn: false });
      localStorage.removeItem("access_token");
    };

    render() {
      if (this.state.isLoggedIn) {
        return (
          <App
            logOut={this.logOut}
            chefs={this.props.chefs}
            recipes={this.props.recipes}
          />
        );
      } else {
        return <LoginPage logIn={this.logIn} />;
      }
    }
  };

export default Login_HOC;
