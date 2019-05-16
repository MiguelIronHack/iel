import React from "react";
// import { Button } from "react-bulma-components";
// import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export function Btn({ toPage, name }) {
  return (
    <Link to={toPage} className="is-large join-btn btn button is-dark">
      {name}
    </Link>
  );
}

export default Btn;
