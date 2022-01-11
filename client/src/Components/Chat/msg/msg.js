import classes from "./msg.module.css";

const Msg = ({ msg, opp }) => {
  const style = { display: "flex", justifyContent: "flex-end" };
  return (
    <div style={opp ? style : null}>
      <div className={classes.Msg}>{msg}</div>
    </div>
  );
};

export default Msg;
