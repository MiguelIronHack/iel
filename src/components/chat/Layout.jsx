// import React, { Component } from "react";
// import io from "socket.io-client";
// import LoginForm from "./LoginForm";
// import { USER_CONNECTED, LOGOUT } from "../../server/config/Events";
// const socketUrl = "http://192.168.0.16:3000/";

// export default class Layout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       socket: null,
//       user: null
//     };
//   }

//   componentDidMount() {
//     this.initSocket();
//   }

//   initSocket = () => {
//     const socket = io(socketUrl);
//     socket.on("connect", () => {
//       console.log("Connected");
//     });
//     this.setState({ socket });
//   };

//   setUser = user => {
//     const socket = this.state;
//     socket.emit(USER_CONNECTED, user);
//     this.setState({ user });
//   };

//   logout = () => {
//     const { socket } = this.state;
//     socket.emit(LOGOUT);
//     this.setState({ user: null });
//   };

//   render() {
//     const { title } = this.props;
//     const { socket } = this.state;
//     return (
//       <div className="chat">
//         <LoginForm socket={socket} setUser={this.setUser} />
//         {title}
//       </div>
//     );
//   }
// }
