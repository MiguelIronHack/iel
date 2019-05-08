import React, { Component } from "react";
import { Button } from "react-bulma-components";
export class Btn extends Component {
  render() {
    return (
      <Button
        className="is-large join-btn btn"
        color="dark"
        onClick={() => console.log(this)}
      >
        {this.props.name}
      </Button>
    );
  }
}

export default Btn;
