import React, { Component } from "react";
import { Progress, Heading } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faBook } from "@fortawesome/free-solid-svg-icons";

import "./course.css";

export default class Courses extends Component {
  render() {
    return (
      <section className="course-section columns is-mobile">
        <aside className="panel course-panel column">
          <p className="panel-heading">Sidebar</p>

          <label className="panel-block">
            Week 1
            <input className="aside-panel-margin" type="checkbox" />
          </label>
          <label className="panel-block">
            Week 2
            <input className="aside-panel-margin" type="checkbox" />
          </label>
          <label className="panel-block">
            Week 3
            <input className="aside-panel-margin" type="checkbox" />
          </label>

          <div className="panel-block is-active">
            <div>Forum</div>
            <span className="panel-icon aside-panel-margin">
              <FontAwesomeIcon icon={faBook} />
            </span>
          </div>

          <div className="panel-block">
            <div className="">Course Info</div>
            <span className="panel-icon aside-panel-margin">
              <FontAwesomeIcon icon={faComments} />
            </span>
          </div>
        </aside>
        <div
          className="column is-four-fifths
"
        >
          <Progress max={100} value={25} color="success" />
          <div className="box">
            <Heading size={4}>Course Title</Heading>
            <div className="columns">
              <article className="message is-dark column">
                <div className="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <strong>Pellentesque risus mi</strong>, tempus quis placerat
                  ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                  fringilla. Nullam gravida purus diam, et dictum efficitur.
                  Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
                  sodales, arcu et sollicitudin porttitor, tortor urna tempor
                  ligula, id porttitor mi magna a neque. Donec dui urna,
                  vehicula et sem eget, facilisis sodales sem.
                </div>
              </article>
              <article className="message is-dark column">
                <div className="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <strong>Pellentesque risus mi</strong>, tempus quis placerat
                  ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                  fringilla. Nullam gravida purus diam, et dictum efficitur.
                  Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec
                  sodales, arcu et sollicitudin porttitor, tortor urna tempor
                  ligula, id porttitor mi magna a neque. Donec dui urna,
                  vehicula et sem eget, facilisis sodales sem.
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
