import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
// import { browserHistory } from 'react-router';

class Header extends Component {
  render() {
      console.log(this.props)
    return (
      <Menu stackable>
        <Menu.Item onClick={() => this.props.history.push('/')}>
          <img
            src={require("../images/levvel-logo-light.svg")}
            alt="Levvel_Logo"
            style={{ width: "200px" }}
          />
        </Menu.Item>

        <Menu.Menu position='right'>

            <Menu.Item onClick={() => this.props.history.push('/signup')} name="signup">
            Sign up
            </Menu.Item>

            <Menu.Item onClick={() => this.props.history.push('/login')} name="login">
            login
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
