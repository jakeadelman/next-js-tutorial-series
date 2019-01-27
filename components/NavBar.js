import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/" active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
