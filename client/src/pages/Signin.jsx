import React  from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  
  return (
    <div className="my-40 p-3 max-w-lg mx-auto h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <h1 className="text-3xl text-center font-semibold my-5">Sign in</h1>
      <form className="flex flex-col gap-4 items-center">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-active btn-ghost text-lg w-full max-w-xs hover:text-white">
          Sign in
        </button>
      </form>
      <div className="flex gap-2 mt-5 mx-32">
        <p>Have an account?</p>
        <Link to="/signup">
          <span className="text-blue-500 font-semibold hover:underline">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
