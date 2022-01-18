import Friend from "./Friends/Friends";
import classes from "./List.module.css";

const arr = [
  {
    name: "Shubham Tribvedi",
    msg: "Hello !!!!",
    time: "yesterday",
    email: "strivedi_be19@thapar.edu",
  },
  {
    name: "Shubham Tribvedi",
    msg: "Hello !!!!",
    time: "yesterday",
    email: "shubham072001@gmail.com",
  },
  {
    name: "Shubham Tribvedi",
    msg: "Hello !!!!",
    time: "yesterday",
    email: "shubham072001@gmail.com",
  },
];

const List = ({ setReceiver }) => {
  const clickHandle = (gg) => {
    setReceiver(gg.email);
    console.log(gg);
  };
  return (
    <div className={classes.Lists}>
      <div className={classes.Header}>
        <div className={classes.Image}>
          <img src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
        </div>
      </div>
      <div className={classes.Search}>
        <input type="text" placeholder="Search or start new Chat" />
      </div>
      <div className={classes.List}>
        {arr.map((gg, i) => {
          return (
            <Friend
              key={gg.email + i}
              name={gg.name}
              msg={gg.msg}
              time={gg.time}
              clickHandle={() => clickHandle(gg)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
