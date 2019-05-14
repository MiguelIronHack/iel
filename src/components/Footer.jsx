import React, { Component } from "react";
import { Footer, Container } from "react-bulma-components";
import NextSection from "../pages/index/components/NextSection";

export class IndexFooter extends Component {
  render() {
    return (
      <Footer className="footer has-background-white-ter">
        <Container>
          <p>
            iel was created by Miguel Bento and Daniel Diaz, Frank Marmier and
            Gerard Joubi. The order matters.
          </p>
          <NextSection className="footer-btn next-section-btn" href="#" />
        </Container>
      </Footer>
    );
  }
}

export default IndexFooter;
