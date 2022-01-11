import classes from "./Login.module.css";
import logo from "./google.png";

const Login = () => {
  const clickHandle = () => {
    console.log("Login Handle");
  };

  return (
    <div className={classes.App}>
      <div onClick={clickHandle} className={classes.google}>
        <p>Login With Google</p>
        <img src={logo} />
      </div>
    </div>
  );
};

export default Login;
