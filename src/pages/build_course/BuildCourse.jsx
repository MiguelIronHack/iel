import React, { Component } from "react";
import List from "../../components/List";
import Dropdown from "./../../components/RealDropDown";
import { getLessons } from "./../../api/lessonHandler";
import { getAllTags } from "../../api/tagHandler";
import { getUserCourses, updateCourse } from "../../api/coursesHandler";
import { createModule, updateModule } from "../../api/moduleHandler";
import { getLocalToken } from "../../api/ajaxLogin";
import SidePanel from "../components/CourseSidePanel";
import { faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import ModuleList from "./ModulesList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import "./buildCourse.css";

class BuildCourse extends Component {
  state = {
    buildingCourse: false,
    selectedTag: {},
    tags: [],
    selectedModule: "",
    courses: [],
    modules: [],
    courseModules: []
  };

  componentDidMount() {
    const userToken = getLocalToken();
    if (!userToken) {
      this.props.history.push("/login");
      return;
    }

    Promise.all([
      getUserCourses(userToken._id),
      getLessons(),
      getAllTags()
    ]).then(results => {
      const generalTag = { name: "All", _id: "" };
      const [courses, lessons, tags] = results;
      this.setState({
        courses: courses.data,
        lessons: lessons.data,
        tags: [generalTag, ...tags.data],
        selectedTag: generalTag
      });
    });
  }

  handleClick = course => {
    this.setState({
      currentCourse: course,
      buildingCourse: !this.state.BuildCourse
    });
  };

  addModule = () => {
    const modules = [...this.state.currentCourse.courseModules];
    createModule(this.state.currentCourseId)
      .then(res => {
        const createdModule = {
          title: "",
          lessons: [],
          _id: res.data
        };
        const { currentCourse } = { ...this.state };
        modules.push(createdModule);
        currentCourse.courseModules = modules;
        this.setState({ currentCourse });
        updateCourse(currentCourse._id, { courseModules: modules })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  handleSelect = data => {
    this.setState({ selectedTag: data });
  };

  handleModuleSelect = (e, mod) => {
    this.setState({ selectedModule: mod });
  };

  addLesson = lesson => {
    if (!this.state.selectedModule) {
      this.notifyError();
      return;
    }

    const selectedModule = { ...this.state.selectedModule };
    selectedModule.lessons.push(lesson);
    this.setState({ selectedModule: selectedModule });
    const parsedLessons = selectedModule.lessons.map(lesson => lesson._id);
    updateModule(selectedModule._id, { lessons: parsedLessons })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  deleteModule = mod => {
    const arr = _.pull(this.state.currentCourse.courseModules, mod);
    const currentCourse = { ...this.state.currentCourse };
    currentCourse.courseModules = arr;
    this.setState({ currentCourse });
    updateCourse(currentCourse._id, { courseModules: arr })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  notifyError = () =>
    toast("Select a module to proceed", {
      type: toast.TYPE.WARNING
    });

  handleRemove = (item, mod) => {
    const arr = _.pull(mod.lessons, item);
    const newLessons = arr.map(less => _.pick(less, "_id"));
    updateModule(mod._id, { lessons: newLessons })
      .then(res => {
        const currentCourse = { ...this.state.currentCourse };
        currentCourse.courseModules[
          currentCourse.courseModules.indexOf(mod)
        ].lessons = arr;
        this.setState({ currentCourse });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      buildingCourse,
      courses,
      lessons,
      selectedTag,
      currentCourse,
      tags
    } = this.state;
    if (!courses.length) return <h1>No courses to display</h1>;

    const filteredLessons =
      selectedTag && selectedTag._id
        ? lessons.filter(lesson => lesson.tags._id === selectedTag._id)
        : lessons;

    return (
      <React.Fragment>
        <SidePanel
          firstNavItem="My Courses"
          firstNavItemIcon={faSignInAlt}
          firstNavItemLink="/profile"
          secondNavItem="Build Course"
          secondNavItemIcon={faPlus}
          secondNavItemLink="/build-course"
          thirdNavItem="Create Lessons"
          thirdNavItemIcon={faPlus}
          thirdNavItemLink="/create/lesson"
          fourthNavItem="Create Course"
          fourthNavItemIcon={faPlus}
          fourthNavItemLink="/create-course"
          fifthNavItem="Edit Lessons"
          fifthNavItemIcon={faPlus}
          fifthNavItemLink="/edit-lesson"
          courseModules={this.state.courseModules}
        />
        <section className="build-course-section">
          <div>
            <div className="build-course-grid">
              {buildingCourse ? (
                <React.Fragment>
                  <div className="build-course-icon">
                    <div className="module-title">
                      <span onClick={this.addModule}>
                        <i className="fas fa-plus fa-2x" />
                      </span>
                      Add a module
                    </div>
                    <div className="module-grid ">
                      {currentCourse.courseModules.map((mod, i) => (
                        <ModuleList
                          selectedMod={this.state.selectedModule}
                          handleModule={this.deleteModule}
                          key={i}
                          handleRemove={this.handleRemove}
                          handleSelect={this.handleModuleSelect}
                          title={`Module ${i + 1}`}
                          data={mod}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="lesson-grid ">
                    <Dropdown
                      name="tag"
                      handleSelect={this.handleSelect}
                      currentItem={selectedTag}
                      data={tags}
                    />
                    <List
                      handleClick={this.addLesson}
                      title="Lessons"
                      data={filteredLessons}
                    />
                  </div>
                </React.Fragment>
              ) : (
                <div className="build-course-showcase">
                  <h1 className="text is-center title">
                    Select a course to build !
                  </h1>
                  <List
                    specialClass={true}
                    title="Courses"
                    handleClick={this.handleClick}
                    data={courses}
                  />
                </div>
              )}
            </div>
          </div>
          <ToastContainer />
        </section>
      </React.Fragment>
    );
  }
}

export default BuildCourse;
