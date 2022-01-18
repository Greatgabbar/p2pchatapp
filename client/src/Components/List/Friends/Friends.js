import classes from "./Friends.module.css";

const Friend = ({ name, clickHandle, msg, time, img }) => {
  return (
    <div className={classes.Friend} onClick={clickHandle}>
      <div className={classes.Image}>
        <img src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
      </div>
      <div className={classes.Data}>
        <div className={classes.Name}>{name}</div>
        <div className={classes.Msg}>{msg}</div>
      </div>
      <div className={classes.Time}>{time}</div>
    </div>
  );
};

export default Friend;
