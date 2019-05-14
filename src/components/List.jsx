import React, { Component } from "react";

class List extends Component {
  state = {};

  raiseSelectedModule = mod => {
    this.props.handleModule(mod);
  };

  render() {
    const {
      data,
      module: mod,
      title,
      id,
      type,
      handleClick,
      handleRemove
    } = this.props;
    if (!data.length)
      return (
        <React.Fragment>
          {type === "module" ? (
            <h1 id={id} onClick={e => this.raiseSelectedModule(mod)}>
              {title}
            </h1>
          ) : (
            <h1>{title}</h1>
          )}
          <ul>
            <li>
              <div className="notification">
                <p>This is Empty</p>
              </div>
            </li>
          </ul>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        {this.props.type === "module" ? (
          <h1 id={id} onClick={e => this.raiseSelectedModule(mod)}>
            {title}
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
        <ul>
          {data.map((item, index) => (
            <li
              id={item._id}
              style={{ margin: "1rem" }}
              onClick={e => handleClick(item)}
              key={index}
            >
              <div className="notification">
                {this.props.type === "module" ? (
                  <button
                    onClick={e => handleRemove(item, mod)}
                    className="delete"
                  >
                    d
                  </button>
                ) : null}
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
