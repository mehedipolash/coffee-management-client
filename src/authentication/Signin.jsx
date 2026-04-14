import React from "react";
import { Link } from "react-router";

const Signin = () => {

    const handleSignin=(e)=>{
        e.preventDefault();
    }

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Signin now!</h1>
        <form onSubmit={handleSignin} className="fieldset">
         
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Signup</button>
        </form>
      </div>
      <button className="btn btn-lg bg-green-400 mt-20">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Signin;
