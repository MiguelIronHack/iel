import React, { Component } from "react";

class List extends Component {
  state = {};

  render() {
    const { data, title, id, type, handleModule, handleClick } = this.props;
    if (!data.length)
      return (
        <React.Fragment>
          {type === "module" ? (
            <h1 id={id} onClick={handleModule}>
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
          <h1 id={id} onClick={handleModule}>
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
              onClick={e => handleClick(e)}
              key={index}
            >
              <div className="notification">
                <button className="delete" />
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
