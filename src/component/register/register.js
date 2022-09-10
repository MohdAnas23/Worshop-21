import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const history = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, repassword, number } = user;
    if (
      name.length > 1 &&
      email &&
      password &&
      number.length > 9 &&
      password === repassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        setError(res.data.message);
        history("/login");
      });
    } else if (password !== repassword) {
      setError("Password doesn't match");
    } else {
      setError("Please fill below deatils");
    }
  };
  console.log("user", user);
  return (
    <div className="flex justify-center items-center mt-20 ">
      <div className="py-8  border flex  flex-col justify-center px-8 space-y-5 bg-white shadow-2xl">
        <div className="text-xl">
          <h1>Register</h1>
        </div>
        <p className="text-red-500">{error}</p>

        <div className="flex flex-col">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border-2 w-96 h-10 px-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col ">
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
          <label>Phone number</label>
          <input
            type="Email"
            name="number"
            value={user.number}
            onChange={handleChange}
            placeholder="Phone no."
            className="border-2 w-96 h-10 px-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col ">
          <label>Password</label>
          <input
            type="Password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="border-2 w-96 h-10 px-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col ">
          <label>Re-Password</label>
          <input
            type="Password"
            placeholder="Re-Password"
            name="repassword"
            value={user.repassword}
            onChange={handleChange}
            className="border-2 w-96 h-10 px-2 outline-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={register}
            className="w-96 h-10 text-white text-xl bg-blue-500"
          >
            Register
          </button>
          <div className="flex justify-center items-center">
            <div>Or</div>
          </div>
          <button
            onClick={() => history("/login")}
            className="w-96 h-10 text-white text-xl bg-blue-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
