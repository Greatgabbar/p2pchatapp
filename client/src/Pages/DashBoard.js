import Chat from "../Components/Chat/Chat";
import List from "../Components/List/List";
import classes from "./Dashboard.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
const { io } = require("socket.io-client");

const Dashboard = () => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const getUser = async () => {
    const user = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/user/profile`
    );
    return user;
  };

  useEffect(async () => {
    const socketop = io(process.env.REACT_APP_WS, {
      transports: ["websocket"],
    });
    setSocket(socketop);
    socketop.on("connect", () => {
      console.log("Connected");
    });
    socketop.on("lessgo", (s) => {
      console.log(s);
    });
    // return () => socketop.close();
  }, [setSocket]);
  return (
    <div className={classes.Dashboard}>
      <div className={classes.List}>
        <List socket={socket} setReceiver={setReceiver} />
      </div>
      <div className={classes.Chat}>
        <Chat receiver={receiver} socket={socket} />
      </div>
    </div>
  );
};

export default Dashboard;
