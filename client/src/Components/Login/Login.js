import classes from "./Login.module.css";
import logo from "./google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const clickHandle = () => {
    // navigate(`${process.env.REACT_APP_SERVER}/api/auth/login`);
    window.location.href = `${process.env.REACT_APP_SERVER}/api/auth/login`;
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
