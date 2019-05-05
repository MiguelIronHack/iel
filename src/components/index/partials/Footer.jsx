import React, { Component } from "react";
import { Footer, Container } from "react-bulma-components";
import NextSection from "./components/NextSection";

export class IndexFooter extends Component {
  render() {
    return (
      <Footer className="footer">
        <Container>
          <p>
            Yield was created by Miguel Bento and Daniel Diaz <br /> &copy; 2019
            The source code is licensed MIT
          </p>
        </Container>
        <NextSection className="footer-btn next-section-btn" href="#" />
      </Footer>
    );
  }
}

export default IndexFooter;
