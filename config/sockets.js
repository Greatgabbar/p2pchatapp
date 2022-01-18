module.exports = (io) => {
  io.on("connection", async (socket) => {
    console.log(socket.id);
    socket.id = socket.request.user.email;
    socket.emit("lessgo", { msg: "Welcome", id: socket.id });

    //when user click on sent msg
    socket.on("sendMsg", (data) => {
      console.log(data);
      // sent to that perticular socket id
      socket.to(data.to).emit("receiveMsg", {
        msg: data.msg,
        from: data.to,
        time: data.time,
      });
    });
  });
};
