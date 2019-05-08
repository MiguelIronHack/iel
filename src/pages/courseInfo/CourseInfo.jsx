import React from "react";
import { Heading, Columns } from "react-bulma-components";
import Btn from "../../components/partials/Btn";
import "./courseInfo.css";

export default function courseInfo() {
  return (
    <section className="course-info">
      <Heading size={4} className="	category">
        Category: What a great category
      </Heading>
      <Heading size={2} className="	category">
        COURSE TITLE
      </Heading>
      <Heading size={4} className="	category">
        Contributor
      </Heading>
      <Heading size={5} className="	category">
        Rate: *****
      </Heading>

      <Btn className="enroll-btn" name="Enroll Now!" />

      <nav className="nav has-background-dark ">
        <ul className="navbar-start ">
          <li>
            <a
              className="navbar-item has-text-white-ter course-info-nav-link"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="navbar-item has-text-white-ter course-info-nav-link"
              href="#program"
            >
              Program
            </a>
          </li>
          <li>
            <a
              className="navbar-item has-text-white-ter course-info-nav-link"
              href="#contributor"
            >
              Contributor
            </a>
          </li>
        </ul>
      </nav>
      <article id="about">
        <h1 className="headers">About</h1>
        <p className="description">
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
      <article className="opinions card-container">
        <div className="opinnion has-background-white">
          <p>
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
        <div className="opinnion has-background-white">
          <p>
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
        <div className="opinnion has-background-white">
          <p>
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </div>
      </article>
      <article id="contributor">
        <h1 className="headers">Contributor</h1>
        <div className="contributor-content">
          <img
            src="https://media.licdn.com/dms/image/C5603AQGcTUgKHAB77A/profile-displayphoto-shrink_100_100/0?e=1562803200&v=beta&t=ZY_n3oeeuttVY2l7YpkB9m77ufSZ_2Eqx1ro3FLoeGc"
            alt="contributor-image"
          />
          <p className="contributor-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            reiciendis maiores neque dicta iste fugiat assumenda nihil,
            inventore accusamus ipsam dolorum iusto culpa quae doloremque vitae
            nobis mollitia veritatis dolor?
          </p>
        </div>
      </article>
    </section>
  );
}
