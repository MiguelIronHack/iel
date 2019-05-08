import React from "react";
import { Heading } from "react-bulma-components";
import Btn from "../../components/partials/Btn";
import "./courseInfo.css";

export default function courseInfo() {
  return (
    <section className="course-info">
      <Heading className="has-text-centered	">
        <p className="category">Category: What a great category</p>
        <p className="course-title">COURSE TITLE</p>
        <div>
          <p className="rate">Rate: *****</p>
          <p className="contributor">Contributor</p>
        </div>

        <Btn className="enroll-btn" name="Enroll Now!" />
      </Heading>
    </section>
  );
}
