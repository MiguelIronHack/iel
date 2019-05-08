import React from "react";
import "react-bulma-components";
import "./App.css";
import "moment-timezone";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/partials/NavMain";
import Index from "./components/index/Index";
import Profile from "./components/profile/Profile";
import Register from "./components/login&register/Register";
import Login from "./components/login&register/Login";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./pages/about/About";
import CourseInfo from "./pages/courseInfo/CourseInfo";

import Courses from "./pages/courses/Courses";
import Footer from "./components/partials/Footer";
// import Layout from "./components/chat/Layout";

/* <Layout className="chat" /> */

function App() {
  return (
    <div className="App has-background-white-bis">
      <Navbar />
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/course-info" component={CourseInfo} />

        <Route path="/course" component={Courses} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
