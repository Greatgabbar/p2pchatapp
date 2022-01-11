import classes from "./Chat.module.css";
import emoji from "./emoji.svg";
import { useState } from "react";
import Msg from "./msg/msg";

const Chat = () => {
  const [chat, setChat] = useState(null);

  const inputHandle = (e) => {
    setChat(e.target.value);
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
        <Msg msg="Hello 1234567890" />
        <Msg opp msg="Hello 1234567890" />
        <Msg msg="Hello 1234567890" />
        <Msg opp msg="Hello 1234567890" />
        <Msg msg="Hello 1234567890" />
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Emoji}>
          <img src={emoji} alt="emojis" />
        </div>
        <div className={classes.Input}>
          <input
            type="text"
            onChange={inputHandle}
            placeholder="Type something ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
