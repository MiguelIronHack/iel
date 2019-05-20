import React, { Component } from "react";

class List extends Component {
  state = {};

  render() {
    const { data, handleClick, deletable, mod } = this.props;
    if (!data)
      return (
        <div className="module-content">
          <p>Empty</p>
        </div>
      );
    return (
      <React.Fragment>
        <ul style={{ minWidth: "min-content" }}>
          {data.map((item, index) => (
            <li
              id={item._id || index}
              style={{
                minWidth: "100%",
                marginTop: "1vh"
              }}
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
