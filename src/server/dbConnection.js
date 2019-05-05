const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
  console.log("You are now connected to the database");
});

mongoose.connection.on("error", () => {
  console.log("Connection to the database failed");
});

module.exports = mongoose.connection;
