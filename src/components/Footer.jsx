import React, { Component } from "react";
import { Footer, Container } from "react-bulma-components";
import NextSection from "../pages/index/components/NextSection";

export class IndexFooter extends Component {
  render() {
    return (
      <Footer className="footer">
        <Container>
          <div className="footer-content">
            <a href="#">
              <img
                className="footer-img"
                src="https://ia601407.us.archive.org/24/items/cupidstrick_execs_Logo/logo.png"
                alt="Teachimp Logo"
              />
            </a>
            <p className="footer-text">
              iel was created by Miguel Bento and Daniel Diaz, Frank Marmier and
              Gerard Joubi. The order matters.
            </p>
            <NextSection className="footer-btn next-section-btn" href="#" />
          </div>
        </Container>
      </Footer>
    );
  }
}

export default IndexFooter;
