import React, { Component } from "react";
import List from "../../components/List";

class BuildCourse extends Component {
  state = {
    buildingCourse: false,
    selectedModule: "",
    courses: [
      {
        id: 1,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 2,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 3,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 4,
        title: "Master React",
        description: "Short Description Lorem ipsum"
      }
    ],

    modules: [
      {
        id: 1,
        title: "Module 1",
        description: "Short Description Lorem ipsum",
        lessons: [
          {
            id: 1,
            title: "Lesson 1",
            description: "Short Description Lorem ipsum"
          },
          {
            id: 2,
            title: "Lesson 1",
            description: "Short Description Lorem ipsum"
          }
        ]
      },
      {
        id: 2,
        title: "Module 1",
        description: "Short Description Lorem ipsum",
        lessons: []
      },
      {
        id: 3,
        title: "Module 1",
        description: "Short Description Lorem ipsum",
        lessons: []
      },
      {
        id: 4,
        title: "Module 1",
        description: "Short Description Lorem ipsum",
        lessons: [
          {
            id: 1,
            title: "Lesson 1",
            description: "Short Description Lorem ipsum"
          }
        ]
      }
    ],

    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 2,
        title: "Lesson 1",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 3,
        title: "Lesson 1",
        description: "Short Description Lorem ipsum"
      },
      {
        id: 4,
        title: "Lesson 1",
        description: "Short Description Lorem ipsum"
      }
    ]
  };

  handleClick = e => this.setState({ buildingCourse: !this.state.BuildCourse });

  getLesson = ({ id }) => {
    let lesson = null;
    for (let item of this.state.lessons) {
      //+ sign to transform the id into a number otherwise this fucks up the whole compare
      if (item.id === +id) lesson = item;
    }
    return lesson;
  };

  getModule = ({ id }) => {
    let selectedModule = null;
    for (let item of this.state.modules) {
      if (item.id === +id) selectedModule = item;
    }
    return selectedModule;
  };

  addModule = () => {
    const modules = [...this.state.modules];
    const id = modules.length;
    const createdModule = {
      title: "",
      lessons: [],
      id: id
    };
    modules.push(createdModule);
    this.setState({ modules: modules });
  };

  handleModuleSelect = ({ currentTarget }) => {
    const selectedModule = this.getModule(currentTarget);
    this.setState({ selectedModule: selectedModule });
  };

  addLesson = ({ currentTarget: input }) => {
    if (!this.state.selectedModule) {
      console.log("no module fuck you");
      return;
    }
    const lesson = this.getLesson(input);
    const selectedModule = { ...this.state.selectedModule };
    selectedModule.lessons.push(lesson);
    this.setState({ selectedModule: selectedModule });
  };

  render() {
    const { buildingCourse, courses, modules, lessons } = this.state;
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
                {modules.map((mod, index) => (
                  <List
                    key={index}
                    id={mod.id}
                    type="module"
                    handleModule={this.handleModuleSelect}
                    title={`Module ${index + 1}`}
                    data={mod.lessons}
                    handleClick={this.handleClick}
                  />
                ))}
              </div>
              <div className="column is-4">
                <button className="button">Add Lesson</button>
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
              ;
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
  };
}

export default BuildCourse;
