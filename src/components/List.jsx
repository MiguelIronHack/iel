import React, { Component } from "react";

class List extends Component {
  state = {};
  render() {
    return (
      <ul>
        {this.props.data.map(item => (
          <li onClick={this.props.handleClick} key={item.id}>
            <div className="notification">
              <button className="delete" />
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
