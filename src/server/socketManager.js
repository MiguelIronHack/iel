// const io = require("./server").chatApp;
// const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require("./config/Events");

// const { createUser, createMessage, createChat } = require("./config/Schemas");

// const connectedUsers = {};

// module.exports = function(socket) {
//   console.log("Socket ID" + socket.id);
//   // verify username
//   socket.on(VERIFY_USER, (nickname, clbk) => {
//     if (isUser(connectedUsers, nickname)) {
//       clbk({ isUser: true, user: null });
//     } else {
//       clbk({ isUser: false, user: createUser({ name: nickname }) });
//     }
//   });

//   // user connection
//   socket.on(USER_CONNECTED, user => {
//     connectedUsers = addUser(connectedUsers, user);
//     socket.user = user;
//     console.log(connectedUsers);
//   });
// };

// // Check if the user is in the list
// function addUser(userList, username) {
//   let newList = Object.assign({}, userList);
//   newList[user.name] = user;
//   return newList;
// }
// // Check if the user is in the list
// function removeUser(userList, username) {
//   let newList = Object.assign({}, userList);
//   delete newList[username];
//   return newList;
// }
// // Check if the user is in the list
// function isUser(userList, username) {
//   return username in userList;
// }
