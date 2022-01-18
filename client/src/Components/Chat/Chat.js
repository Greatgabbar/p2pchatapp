import classes from "./Chat.module.css";
import emoji from "./emoji.svg";
import { useState, useEffect } from "react";
import Msg from "./msg/msg";

const Chat = ({ socket, receiver }) => {
  const [chat, setChat] = useState([
    {
      from: "hdhdh",
      msg: "Hello1 2333",
      time: "yedgyed",
    },
    {
      from: "hello123",
      msg: "Hello1 2ddwdwdjwend",
      time: "yedgyed",
    },
    {
      from: "hdhdh",
      msg: "adkjwedwedwe d wed wedw",
      time: "yedgyed",
    },
    {
      from: "hdhdh",
      msg: "dnwjdbwedwed we dwed",
      time: "yedgyed",
    },
    {
      from: "hdhdh",
      msg: "wjehdbwedjwed",
      time: "yedgyed",
    },
    {
      from: "hdhdh",
      msg: "Hello1 2333",
      time: "yedgyed",
    },
  ]);

  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (!socket) return;
    console.log("Chats useEffect");
    socket.on("receiveMsg", (data) => {
      console.log(data);
    });
  }, []);

  const inputHandle = (e) => {
    setMsg(e.target.value);
  };

  const handleSend = (e) => {
    if (e.key === "Enter") {
      setChat([...chat, { from: "me", msg: msg, time: new Date() }]);
      socket.emit("sendMsg", { msg: msg, to: receiver, time: new Date() });
      e.target.value = "";
      setMsg("");
    }
  };

  return (
    <div className={classes.Chat}>
      <div className={classes.Header}>
        <div className={classes.Image}>
          <img src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
        <div className={classes.Name}>Jhon Doe</div>
      </div>
      <div className={classes.Main}>
        {chat.map((msg, i) => {
          return (
            <Msg
              key={msg.time + i}
              msg={msg.msg}
              opp={msg.from === "me" ? true : false}
            />
          );
        })}
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Emoji}>
          <img src={emoji} alt="emojis" />
        </div>
        <div className={classes.Input}>
          <input
            type="text"
            onChange={inputHandle}
            onKeyDown={handleSend}
            placeholder="Type something ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
