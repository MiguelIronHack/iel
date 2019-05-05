import React from "react";
import { Navbar } from "react-bulma-components/full";
import NavBarDropdown from "./Dropdown";

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
          <Navbar.Item renderAs="a" href="#">
            <img
              src="http://hashtag-bg.com/wp-content/uploads/2018/08/atom-gif-transparent-resume-fuyu-red.gif"
              alt="logo"
            />
          </Navbar.Item>
          <Navbar.Burger onClick={this.toggleNavbar} />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item>Home</Navbar.Item>
            <Navbar.Item>About</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item>
              <NavBarDropdown />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}
