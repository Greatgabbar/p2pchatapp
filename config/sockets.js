module.exports = (io) => {
  io.on("connection", async (socket) => {
    console.log(socket.id);
    const sockets = await io.fetchSockets();
    console.log(socket.request.user);
    socket.emit("lessgo", { msg: "Welcome", id: socket.handshake });
  });
};
