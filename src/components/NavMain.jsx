import React from "react";
import { Navbar } from "react-bulma-components/full";
import { NavLink } from "react-router-dom";
import NavBarDropdown from "./Dropdown";
import "./Nav.css";

export default class NavMain extends React.Component {
  state = {
    selected: false
  };
  onChange = selected => {
    this.setState({ selected });
  };

  toggleNavbar = () =>
    this.setState(prevState => {
      return { selected: !prevState.selected };
    });

  render() {
    return (
      <Navbar className="navbar is-dark" active={this.state.selected}>
        <Navbar.Brand>
          <NavLink to="/">
            <Navbar.Item renderAs="div">
              <img
                src="https://ia601407.us.archive.org/24/items/cupidstrick_execs_Logo/logo.png"
                alt="TeaChimp Logo"
              />
            </Navbar.Item>
          </NavLink>
          <Navbar.Burger onClick={this.toggleNavbar} />
        </Navbar.Brand>
        <Navbar.Menu className="has-background-dark">
          <Navbar.Container>
            <Navbar.Item renderAs="div">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </Navbar.Item>
            <Navbar.Item renderAs="div">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </Navbar.Item>
            <Navbar.Item renderAs="div">
              <NavLink className="nav-link" to="/explore">
                Explore
              </NavLink>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item renderAs="div">
              <NavBarDropdown />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}
