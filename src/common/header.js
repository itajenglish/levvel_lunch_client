import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  render() {
      console.log(this.props)
    return (
      <Menu stackable>
        <Menu.Item>
          <img
            src={require("../images/levvel-logo-light.svg")}
            alt="Levvel_Logo"
            style={{ width: "200px" }}
          />
        </Menu.Item>

        <Menu.Menu position='right'>

            <Menu.Item name="signup">
            Sign up
            </Menu.Item>

            <Menu.Item name="login">
            login
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
