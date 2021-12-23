const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const io = require("socket.io")(server);

server.listen(PORT, () => {
  console.log(`Server is listenig on ${PORT}`);
});
