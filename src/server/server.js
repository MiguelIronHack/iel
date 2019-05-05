const express = require("express");
const app = express();
// const http = require("http");
// const socketIO = require("socket.io");
// const chatApp = http.createServer(app);
// const io = socketIO(chatApp);
const PORT = process.env.PORT || 8000;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.REACT_DOMAIN,
    optionsSuccessStatus: 200
  })
);

// const SocketManager = require("./socketManager");
// io.on("connection", SocketManager);

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
