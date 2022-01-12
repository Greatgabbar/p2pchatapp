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
const session = require("express-session");
const sessionStore = new session.MemoryStore();
const cookieParser = require("cookie-parser");
// for getting aut data in sockets
let passportSocketIo = require("passport.socketio");

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

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000, /*secure: true,*/ httpOnly: true },
  })
);

require("./config/passportConfig");
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));

server.listen(PORT, () => {
  console.log(`Server is listenig on ${PORT}`);
});

// * io setup

const session_handler = require("io-session-handler").from(io, {
  timeout: 5000,
});
app.set("session_handler", session_handler);

io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: "connect.sid",
    store: sessionStore,
    secret: process.env.COOKIE_SECRET,
    success: onAuthorizeSuccess, // *optional* callback on success - read more below
    fail: onAuthorizeFail, // *optional* callback on fail/error - read more below
  })
);

function onAuthorizeSuccess(data, accept) {
  console.log("successful connection to socket.io");
  console.log(data); // The accept-callback still allows us to decide whether to

  // accept the connection or not.
  accept(data);
}

function onAuthorizeFail(data, message, error, accept) {
  // if (error) throw new Error(message);
  console.log("failed connection to socket.io:", message);
  accept(new Error("not Authorized"));
}

require("./config/sockets")(io);
