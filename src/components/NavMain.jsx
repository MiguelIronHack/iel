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
                src="http://hashtag-bg.com/wp-content/uploads/2018/08/atom-gif-transparent-resume-fuyu-red.gif"
                alt="logo"
              />
            </Navbar.Item>
          </NavLink>
          <Navbar.Burger onClick={this.toggleNavbar} />
        </Navbar.Brand>
        <Navbar.Menu>
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
