import React, { Component } from "react";
import "react-bulma-components";
import "./App.css";
import "moment-timezone";
// import { getAllCategories } from "./api/categoryHandler";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/NavMain";
import Index from "./pages/index/Index";

import Profile from "./pages/profile/Profile";
import Register from "./pages/login&register/Register";
import Login from "./pages/login&register/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Courses from "./pages/courses/CourseDisplay";
import CourseInfo from "./pages/courseInfo/CourseInfo";
import CourseContent from "./pages/courseContent/CourseContent";
import UserSettings from "./pages/user_settings/UserSettings";
import Footer from "./components/Footer";
import LessonDisplay from "./pages/lessonDisplay/LessonDisplay";
import About from "./pages/about/AboutMain";
import UserManagement from "./pages/dashboard/components/UserManagement";
import CourseManagement from "./pages/dashboard/components/CourseManagement";
import UploadForm from "./components/upload/UploadForm";
import EditCourse from "./pages/dashboard/components/EditCourse";
import EditCategories from "./pages/dashboard/components/EditCategories";
import BuildCourse from "./pages/build_course/BuildCourse";
import CreateUsers from "./pages/login&register/CreateUsers";
import CreateLesson from "./pages/createLesson/CreateLesson";
import Explore from "./pages/explore/Explore";
import CategoryCourses from "./pages/explore/CategoryCourses";
import Thread from "./pages/thread/Thread";
import EditLesson from "./pages/EditLessons/EditLesson";
import PublicProfile from "./pages/PublicProfile/PublicProfile";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar history={this.props.history} />
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/settings" component={UserSettings} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/create/lesson" component={CreateLesson} />
          <Route path="/edit-lesson" component={EditLesson} />
          <Route path="/course-info/:id" component={CourseInfo} />
          <Route path="/course-content" component={CourseContent} />
          {/* <Route path="/lesson" component={LessonDisplay} /> */}
          <Route path="/thread/:courseId" component={Thread} />
          <Route path="/lesson/:id" component={LessonDisplay} />
          <Route path="/course/:id" component={Courses} />
          <Route path="/usermanagement" component={UserManagement} />
          <Route path="/coursemanagement" component={CourseManagement} />
          <Route path="/create-course" component={UploadForm} />
          <Route path="/edit-course/:course" component={EditCourse} />
          <Route path="/edit-categories" component={EditCategories} />
          <Route path="/build-course" component={BuildCourse} />
          <Route path="/create-users" component={CreateUsers} />
          <Route path="/user/profile/:id" component={PublicProfile} />
          <Route path="/explore" component={Explore} />
          <Route path="/explore-by-category/:id" component={CategoryCourses} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
