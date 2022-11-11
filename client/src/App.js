import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/user/Login";
import Notifications from "./components/atom/Notifications";
import Loading from "./components/atom/Loading";

const App = () => {
  return (
    <>
      <Loading />
      <Notifications />
      <Navbar />
      <Login />
    </>
  );
};

export default App;
