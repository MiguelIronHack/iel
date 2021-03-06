import React, { Component } from "react";
import Btn from "../../../components/Btn";
import { Heading, Section, Hero, Container } from "react-bulma-components/full";
import NextSection from "../components/NextSection";
import { getRandomCourse } from "../../../api/coursesHandler";
import { getLocalToken } from "../../../api/ajaxLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EnroleBtn from "../../../components/EnroleBtn";
export class MostPop extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getRandomCourse()
      .then(res => {
        this.setState({
          courses: res.data
        });
      })
      .catch(err => console.error(err.response));
  }

  notifySuccess = () =>
    toast("Your lesson has been submitted my bruddahs", {
      type: toast.TYPE.SUCCESS
    });

  isAuth = () => getLocalToken();

  render() {
    const { title, description, _id } = this.state.courses;
    return (
      <Section id="pop-section" className="pop-section">
        <Hero className="pop-section-hero shadow">
          <Hero.Body>
            <Container>
              <Heading>{title}</Heading>
              <p className="pop-section-content">{description}</p>
            </Container>
          </Hero.Body>
        </Hero>
        {this.isAuth() ? (
          <EnroleBtn id={_id} />
        ) : (
          <Btn toPage={`/register`} className="enroll-btn" name="Enroll" />
        )}

        <NextSection className="next-section-btn" href="#index-courses" />
        <ToastContainer />
      </Section>
    );
  }
}

export default MostPop;
