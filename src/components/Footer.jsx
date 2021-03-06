import React, { Component } from "react";
import { Footer, Container } from "react-bulma-components";
import NextSection from "../pages/index/components/NextSection";

export class IndexFooter extends Component {
  render() {
    return (
      <Footer className="footer">
        <Container>
          <div className="footer-content">
            <a href="#home">
              <img
                className="footer-img"
                src="https://ia601407.us.archive.org/24/items/cupidstrick_execs_Logo/logo.png"
                alt="Teachimp Logo"
              />
            </a>
            <p className="footer-text">Teachimp &copy; 2019</p>
            <NextSection className="footer-btn next-section-btn" href="#" />
          </div>
        </Container>
      </Footer>
    );
  }
}

export default IndexFooter;
