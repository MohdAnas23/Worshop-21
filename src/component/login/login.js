import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      setError(res.data.message);
      setLoginUser(res.data.user);
      history("/");
    });
  };

  console.log(user);
  return (
    <div className="flex justify-center items-center mt-20 ">
      <div className="py-8  border flex  flex-col justify-center px-8 space-y-5 bg-white shadow-2xl">
        <div className="text-xl">
          <h1>Leewayhertz</h1>
        </div>
        <div>
          <p className="text-red-500">{error}</p>
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="border-2 w-96 h-10 px-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col ">
          <label>Password</label>
          <input
            type="Password"
            value={user.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            className="border-2 w-96 h-10 px-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={login}
            className="w-96 h-10 text-white text-xl bg-blue-500"
          >
            Login
          </button>
          <div className="flex justify-center items-center">
            <div>Or</div>
          </div>{" "}
          <button
            onClick={() => history("/register")}
            className="w-96 h-10 text-white text-xl bg-blue-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
