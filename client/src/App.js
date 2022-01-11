import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Pages/DashBoard";
const { io } = require("socket.io-client");

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // const socketop = io(process.env.REACT_APP_WS, {
    //   transports: ["websocket"],
    // });
    // setSocket(socketop);
    // socketop.on("connect", () => {
    //   console.log("Connected");
    // });
    // socketop.on("lessgo", (s) => {
    //   console.log(s);
    // });
    // // return () => socketop.close();
  }, [setSocket]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
