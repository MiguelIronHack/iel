import React from "react";
import { Link } from "react-router-dom";

export function Btn({ toPage, name }) {
  return (
    <Link to={toPage} className="is-large join-btn btn button is-dark">
      {name}
    </Link>
  );
}

export default Btn;
