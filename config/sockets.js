module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(socket.id);
    socket.emit("lessgo", { msg: "Welcome", id: socket.id });
  });
};
