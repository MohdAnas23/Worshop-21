import Login from "./component/login/login";
import Homepage from "./component/homepage/homepage";
import Register from "./component/register/register";

import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rout = () => {
  const [user, setLoginUser] = useState({});
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Rout;
