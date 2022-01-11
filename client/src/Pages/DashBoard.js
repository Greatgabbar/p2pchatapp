import Chat from "../Components/Chat/Chat";
import List from "../Components/List/List";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <div className={classes.List}>
        <List />
      </div>
      <div className={classes.Chat}>
        <Chat />
      </div>
    </div>
  );
};

export default Dashboard;
