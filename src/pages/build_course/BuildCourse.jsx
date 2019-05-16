import React, { Component } from "react";
import List from "../../components/List";
import Dropdown from "./../../components/RealDropDown";
import { getLessons } from "./../../api/lessonHandler";
import { getAllTags } from "../../api/tagHandler";
import { getUserCourses, updateCourse } from "../../api/coursesHandler";
import { createModule, updateModule } from "../../api/moduleHandler";
import { getLocalToken } from "../../api/ajaxLogin";
import Pagination from "../../components/Pagination";
import ModuleList from "./ModulesList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";

class BuildCourse extends Component {
  state = {
    buildingCourse: false,
    selectedTag: {},
    tags: [],
    selectedModule: "",
    courses: [],
    modules: []
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
      const generalTag = { name: "All" };
      const [courses, lessons, tags] = results;
      this.setState({
        courses: courses.data,
        lessons: lessons.data,
        tags: [generalTag, ...tags.data]
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
      })
      .catch(err => console.log(err));
  };

  handleSelect = data => this.setState({ selectedTag: data });

  handleModuleSelect = mod => this.setState({ selectedModule: mod });

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
  };

  notifyError = () =>
    toast("Select a module to proceed", {
      type: toast.TYPE.WARNING
    });

  handleRemove = (item, mod) => {
    // const index = mod.lessons.indexOf(item);
    const arr = _.pull(mod.lessons, item);
    const newLessons = arr.map(less => _.pick(less, "_id"));
    updateModule(mod._id, { lessons: newLessons })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    const currentCourse = { ...this.state.currentCourse };
    currentCourse.courseModules[
      currentCourse.courseModules.indexOf(mod)
    ].lessons = arr;

    this.setState({ currentCourse });
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
        <section>
          <div className="container columns is-12">
            <h1 className="text is-center">Select a course to build !</h1>
            {buildingCourse ? (
              <React.Fragment>
                <div className="column is-6">
                  <button onClick={this.addModule} className="button">
                    Add Module
                  </button>
                  <div className="columns is-12">
                    {currentCourse.courseModules.map((mod, i) => (
                      <ModuleList
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
                <div className="column is-4">
                  <button className="button">Add Lesson</button>
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
              <div className="column is-6">
                <List
                  title="Courses"
                  handleClick={this.handleClick}
                  data={courses}
                />
              </div>
            )}
          </div>
          <button onClick={this.watchState} className="button">
            TEST
          </button>
          <ToastContainer />
        </section>
      </React.Fragment>
    );
  }
  watchState = e => {
    const newModules = this.state.currentCourse.courseModules.map(mod =>
      _.pick(mod, "_id")
    );
    updateCourse(this.state.currentCourse._id, {
      courseModules: newModules
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
}

export default BuildCourse;
