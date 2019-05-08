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
        <p className="contributor">Contributor</p>
        <p className="rate">Rate: *****</p>

        <Btn className="enroll-btn" name="Enroll Now!" />
      </Heading>
      <nav class="navbar-brand">
        <ul class="navbar-start">
          <li class="nav">
            <a class="navbar-item" href="#about">
              About
            </a>
          </li>
          <li class="nav">
            <a class="navbar-item" href="#program">
              Program
            </a>
          </li>
          <li class="nav">
            <a class="navbar-item" href="#contributor">
              Contributor
            </a>
          </li>
        </ul>
      </nav>
      <article id="about">
        <h1 className="headers">About</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          incidunt, molestias aliquid excepturi eos cumque ullam, voluptatem
          architecto ab cum sequi, voluptatibus ipsum soluta! Inventore
          voluptatibus quo facere iste asperiores veniam dolorum dignissimos
          natus officiis. Quam molestias temporibus vel in dolores perferendis
          odit et impedit assumenda maiores! Facere, assumenda accusamus. Ipsum,
          quia provident? Autem sequi earum distinctio aut magnam ducimus
          aliquid reiciendis nobis temporibus adipisci quia fugiat vitae quis
          asperiores commodi saepe harum odio et ipsam, error sunt, ratione
          esse, incidunt eligendi? Assumenda perspiciatis fugiat eveniet sunt
          amet. Consequuntur omnis, ducimus voluptas impedit enim recusandae,
          exercitationem explicabo amet a eaque labore odit asperiores ullam
          facere, quas temporibus mollitia expedita quis ex eius excepturi
          molestias modi incidunt. Eligendi blanditiis, sequi perspiciatis nisi
          soluta officia temporibus inventore. Quasi, dolorum harum! Quia
          nostrum ab, minima id atque deleniti voluptatem facilis debitis soluta
          voluptate omnis temporibus nisi assumenda alias officiis excepturi
          tempora aut reiciendis! Qui doloribus aliquam reiciendis a quasi,
          placeat sit, ab quae assumenda consequuntur eveniet enim facilis
          debitis nihil molestias corrupti esse atque laboriosam dolorum ad.
          Quod impedit provident esse harum itaque deserunt exercitationem
          fugiat vero, ut ducimus sit ab magni quidem, commodi obcaecati ratione
          nesciunt veniam, maxime fuga mollitia qui vel optio? Debitis eligendi
          accusantium error.
        </p>
      </article>
      <article id="program">
        <h1 className="headers">Program</h1>
        <div className="detail-program">
          <div className="card module">
            <h2 className="module-title">Module 1</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              dignissimos consequuntur maiores voluptatum tempora odit illo
              blanditiis pariatur amet, animi autem totam in accusamus. Tenetur
              voluptate nesciunt mollitia distinctio praesentium.
            </p>
            <ul className="lessons">
              <li className="single-lesson">Lesson1</li>
              <li className="single-lesson">Lesson2</li>
              <li className="single-lesson">Lesson3</li>
              <li className="single-lesson">Lesson4</li>
            </ul>
          </div>
          <div className="card module">
            <h2 className="module-title">Module 2</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              dignissimos consequuntur maiores voluptatum tempora odit illo
              blanditiis pariatur amet, animi autem totam in accusamus. Tenetur
              voluptate nesciunt mollitia distinctio praesentium.
            </p>
            <ul className="lessons">
              <li className="single-lesson">Lesson1</li>
              <li className="single-lesson">Lesson2</li>
              <li className="single-lesson">Lesson3</li>
              <li className="single-lesson">Lesson4</li>
            </ul>
          </div>
          <div className="card module">
            <h2 className="module-title">Module 3</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              dignissimos consequuntur maiores voluptatum tempora odit illo
              blanditiis pariatur amet, animi autem totam in accusamus. Tenetur
              voluptate nesciunt mollitia distinctio praesentium.
            </p>
            <ul className="lessons">
              <li className="single-lesson">Lesson1</li>
              <li className="single-lesson">Lesson2</li>
              <li className="single-lesson">Lesson3</li>
              <li className="single-lesson">Lesson4</li>
            </ul>
          </div>
          <div className="card module">
            <h2 className="module-title">Module 4</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              dignissimos consequuntur maiores voluptatum tempora odit illo
              blanditiis pariatur amet, animi autem totam in accusamus. Tenetur
              voluptate nesciunt mollitia distinctio praesentium.
            </p>
            <ul className="lessons">
              <li className="single-lesson">Lesson1</li>
              <li className="single-lesson">Lesson2</li>
              <li className="single-lesson">Lesson3</li>
              <li className="single-lesson">Lesson4</li>
            </ul>
          </div>
        </div>
      </article>
      <article className="card-container">
        <div className="card opinnion">
          <div className="card-content">
            <p className="title">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
            <p className="subtitle">Jeff Atwood</p>
          </div>
        </div>
        <div className="card opinnion">
          <div className="card-content">
            <p className="title">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
            <p className="subtitle">Jeff Atwood</p>
          </div>
        </div>
        <div className="card opinnion">
          <div className="card-content">
            <p className="title">
              “There are two hard things in computer science: cache
              invalidation, naming things, and off-by-one errors.”
            </p>
            <p className="subtitle">Jeff Atwood</p>
          </div>
        </div>
      </article>
      <article id="contributor">
        <h1 className="headers">Contributor</h1>
      </article>
    </section>
  );
}
