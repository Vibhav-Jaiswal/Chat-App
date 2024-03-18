import React, {useRef} from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const fileRef = useRef(null);
  return (
    <div className="my-4 p-3 max-w-lg mx-auto h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <h1 className="text-3xl text-center font-semibold my-5">Sign up</h1>
      <form className="flex flex-col gap-4 items-center">
        <input type="file" ref={fileRef} hidden/>
        <img
          className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer"
          src="https://th.bing.com/th/id/OIP.-gymMKaj3o4z4DoAnkBqzQHaHa?w=196&h=196&c=7&r=0&o=5&cb=11&dpr=1.3&pid=1.7"
          onClick={()=> fileRef.current.click()}
        />
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Bio"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs"
        />
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
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5 mx-32">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500 font-semibold hover:underline">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
