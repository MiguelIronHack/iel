// import React, { Component } from "react";
// import { VERIFY_USER } from "../../server/config/Events";
// export default class LoginForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nickname: "",
//       error: ""
//     };
//   }

//   setUser = ({ user, isUser }) => {
//     console.log(user, isUser);
//     if (isUser) {
//       this.setError("Username taken");
//     } else {
//       this.props.setUser(user);
//     }
//   };

//   setError = error => {
//     this.setState({ error });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { socket } = this.props;
//     const { nickname } = this.state;
//     socket.emit(VERIFY_USER, nickname, this.setUser);
//   };

//   handleChange = e => {
//     this.setState({ nickname: e.target.value });
//   };

//   render() {
//     const { nickname, error } = this.state;
//     return (
//       <div className="login">
//         <form className="login-form" onSubmit={this.handleSubmit}>
//           <label htmlFor="nickname">
//             <h2>Got a nickname?</h2>
//           </label>
//           <input
//             type="text"
//             ref={input => {
//               this.textInput = input;
//             }}
//             id="nickname"
//             value={nickname}
//             onChange={this.handleChange}
//             placeholder={"enter username here..."}
//           />
//           <div className="error">{error ? error : null}</div>
//         </form>
//       </div>
//     );
//   }
// }
