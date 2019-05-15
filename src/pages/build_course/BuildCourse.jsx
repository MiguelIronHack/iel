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
    //TODO GOTTA BRING DEM PROMISE.all
    const userToken = getLocalToken();
    getUserCourses(userToken._id)
      .then(({ data: courses }) => {
        this.setState({ courses });
      })
      .catch(err => console.log(err));
    getLessons()
      .then(({ data: lessons }) => {
        this.setState({ lessons });
      })
      .catch(err => console.log(err));

    getAllTags()
      .then(res => {
        const generalTag = { name: "All" };
        this.setState({
          tags: [generalTag, ...res.data],
          selectedTag: generalTag
        });
      })
      .catch(err => console.log(err));
  }
  handleClick = course => {
    this.setState({
      currentCourse: course,
      modules: course.courseModules,
      buildingCourse: !this.state.BuildCourse
    });
  };

  addModule = () => {
    const modules = [...this.state.modules];
    createModule(this.state.currentCourseId)
      .then(res => {
        const createdModule = {
          title: "",
          lessons: [],
          _id: res.data
        };
        const { currentCourse } = { ...this.state };
        currentCourse.courseModules = modules;
        modules.push(createdModule);
        this.setState({ modules, currentCourse });
      })
      .catch(err => console.log(err));
  };

  handleSelect = data => {
    // const selectedTag = currentTarget.children[0].textContent;
    this.setState({ selectedModule: data });
    // this.setState({ selectedTag: selectedTag });
  };

  handleModuleSelect = mod => this.setState({ selectedModule: mod });

  addLesson = lesson => {
    if (!this.state.selectedModule) {
      console.log("no module fuck you");
      return;
    }
    // const lesson = this.getLesson(input);
    const selectedModule = { ...this.state.selectedModule };
    selectedModule.lessons.push(lesson);
    this.setState({ selectedModule: selectedModule });
    const parsedLessons = selectedModule.lessons.map(lesson => lesson._id);
    updateModule(selectedModule._id, { lessons: parsedLessons })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  deleteModule = mod => {
    const index = this.state.currentCourse.courseModules.indexOf(mod);
    const arr = _.pull(this.state.currentCourse.courseModules, mod);
    const currentCourse = { ...this.state.currentCourse };
    currentCourse.courseModules = arr;
    this.setState({ currentCourse });
  };

  handleRemove = (item, mod) => {
    // const index = mod.lessons.indexOf(item);
    const arr = _.pull(mod.lessons, item);
    const newLessons = arr.map(less => _.pick(less, "_id"));
    updateModule(mod._id, { lessons: newLessons })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    const modules = [...this.state.modules];
    modules[modules.indexOf(mod)].lessons = arr;
    this.setState({ modules });
  };

  render() {
    const {
      buildingCourse,
      courses,
      lessons,
      modules,
      selectedTag,
      tags
    } = this.state;
    if (!courses.length) return <h1>No courses to display</h1>;
    return (
      <React.Fragment>
        <div className="container columns is-12">
          <h1 className="text is-center">Select a course to build !</h1>
          {buildingCourse ? (
            <React.Fragment>
              <div className="column is-4">
                <button onClick={this.addModule} className="button">
                  Add Module
                </button>
                {modules.map((mod, i) => (
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
                  data={lessons}
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
      </React.Fragment>
    );
  }
  watchState = e => {
    console.log(this.state.modules);
    const newModules = this.state.modules.map(mod => _.pick(mod, "_id"));
    updateCourse(this.state.currentCourse._id, {
      courseModules: newModules
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
}

export default BuildCourse;

//  {/* <Pagination items={modules} /> */}
//  {modules.length ? (
//   modules.map((mod, index) => (
//     <List
//       key={index}
//       id={mod.id}
//       type="module"
//       handleModule={this.handleModuleSelect}
//       title={`Module ${index + 1}`}
//       handleRemove={this.handleRemove}
//       handleClick={() => 1 + 1}
//       data={mod.lessons}
//       module={mod}
//     />
//   ))
// ) : (
//   <p>No Modules to display</p>
// )}
