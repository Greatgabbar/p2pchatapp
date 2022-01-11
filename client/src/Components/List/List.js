import Friend from "./Friends/Friends";
import classes from "./List.module.css";

const List = () => {
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
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
        <Friend name="Shubham" msg="Hello !!!" time="yesterday" />
      </div>
    </div>
  );
};

export default List;
