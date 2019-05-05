import React, { Component } from "react";
import io from "socket.io-client";
const socketUrl = "http://192.168.0.102:8000";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null
    };
  }

  initSocket = () => {
    const socket = io(socketUrl);

    this.setState({ socket });
  };
  render() {
    const { title } = this.props;
    return <div className="chat">{title}</div>;
  }
}
