import React, { Component } from "react";
import { Footer, Container } from "react-bulma-components";

export class IndexFooter extends Component {
  render() {
    return (
      <Footer>
        <Container>
          <p>
            Yield was created by Miguel Bento and Daniel Diaz <br /> &copy; 2019
            The source code is licensed MIT
          </p>
        </Container>
      </Footer>
    );
  }
}

export default IndexFooter;
