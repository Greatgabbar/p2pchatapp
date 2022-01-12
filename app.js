const express = require("express");
require("dotenv").config();
const app = express();
const passport = require("passport");
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const socketio = require("socket.io");
const mongoose = require("mongoose");
const io = socketio(server, { transports: ["websocket"] });

app.use(cors({ origin: `${process.env.CLIENT_URL}`, credentials: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(
  process.env.MONGO,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.log("Connection to DB failed \n", err);
    return console.log("Connected to DB.");
  }
);

require("./config/passportConfig");
require("./config/sockets")(io);
app.use(passport.initialize());
// app.use(passport.session());

app.use("/api/auth", require("./routes/auth"));

server.listen(PORT, () => {
  console.log(`Server is listenig on ${PORT}`);
});
