import React, { Component } from "react";

class List extends Component {
  state = {};

  raiseSelectedModule = mod => {
    this.props.handleModule(mod);
  };

  render() {
    const { data, handleClick, deletable, mod } = this.props;
    if (!data.length)
      return (
        <div className="module-content">
          <p>Empty</p>
        </div>
      );
    return (
      <React.Fragment>
        <ul>
          {data.map((item, index) => (
            <li
              id={item._id}
              style={{ margin: "1rem" }}
              onClick={() => (!deletable ? handleClick(item) : void 0)}
              key={index}
            >
              {deletable ? (
                <button
                  onClick={() => handleClick(item, mod)}
                  className="delete"
                >
                  e
                </button>
              ) : null}
              <div className="module-content">
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default List;

{
  /* {this.props.type === "module" ? (
                  <button
                    onClick={e => handleRemove(item, mod)}
                    className="delete"
                  >
                    d
                  </button>
                ) : null} */
}
