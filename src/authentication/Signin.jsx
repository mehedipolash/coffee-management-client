import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // firebase sign in sending
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const signInInfo = {
          email,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };

        // update signIn to the database

        fetch("https://coffee-management-server.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
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
            <button className="btn btn-neutral mt-4">SignIn</button>
          </form>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button className="btn btn-lg bg-green-400">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Signin;
