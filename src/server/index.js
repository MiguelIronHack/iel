const app = require("http").createServer();
const io = (module.exports.io = require("socket.io")(app));

const PORT = process.env.PORT || 8000;

const $ocketManager = require("./socketManager");
io.on("connection", $ocketManager);

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
