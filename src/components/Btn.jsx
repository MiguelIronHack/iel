import React, { Component } from "react";
import { Button } from "react-bulma-components";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export function Btn({ toPage, name }) {
  return (
    <Link to={toPage}>
      <Button className="is-large join-btn btn" color="dark">
        {name}
      </Button>
    </Link>
  );
}

export default Btn;
