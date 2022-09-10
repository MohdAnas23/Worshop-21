import React from "react";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="flex justify-center items-center mt-32">
      <div className="border-4 shadow-lg w-1/2 h-96 border-blue-300  flex justify-center items-center">
        <div className="font-serif text-3xl font-medium">
          <h1>Hello</h1> <h2>You have successfully login</h2>
          <button
            onClick={() => setLoginUser({})}
            className="text-blue-400 w-40 h-10  border bg-slate-200 "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
