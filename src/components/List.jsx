import React, { Component } from "react";

class List extends Component {
  state = {};
  render() {
    if (!this.props.data.length)
      return (
        <React.Fragment>
          {this.props.type === "module" ? (
            <h1 id={this.props.id} onClick={this.props.handleModule}>
              {this.props.title}
            </h1>
          ) : (
            <h1>{this.props.title}</h1>
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
          <h1 id={this.props.id} onClick={this.props.handleModule}>
            {this.props.title}
          </h1>
        ) : (
          <h1>{this.props.title}</h1>
        )}
        <ul>
          {this.props.data.map((item, index) => (
            <li
              id={item.id}
              style={{ margin: "1rem" }}
              onClick={e => this.props.handleClick(e)}
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
