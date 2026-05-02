



// import React, { useContext } from "react";
// // 1. Add useNavigate to your imports
// import { Link, useNavigate } from "react-router"; 
// import { AuthContext } from "../context/AuthContext";
// import Swal from "sweetalert2"; // Optional: for a nice alert
// import axios from "axios";

// const Signin = () => {
//   const { signInUser } = useContext(AuthContext);
//   // 2. Initialize the navigate function
//   const navigate = useNavigate(); 

//   const handleSignin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     signInUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         const signInInfo = {
//           email,
//           lastSignInTime: user?.metadata?.lastSignInTime,
//         };

//        axios.patch("https://coffee-management-server.vercel.app/users", signInInfo)
//           .then((data) => {
//             console.log("after patch", data.data);

       





//         // 2. Update the user's last sign-in time in the database
//         // fetch("https://coffee-management-server.vercel.app/users", {
//         //   method: "PATCH",
//         //   headers: {
//         //     "content-type": "application/json",
//         //   },
//         //   body: JSON.stringify(signInInfo),
//         // })
//         //   .then((res) => res.json())
//         //   .then((data) => {
//         //     console.log("after update patch", data);
            
//             // 3. Navigate the user to the home page
//             // We put it here to ensure the DB update started/finished first
//             if (data.matchedCount > 0) {
//                 Swal.fire({
//                     title: "Success!",
//                     text: "Logged in successfully",
//                     icon: "success",
//                     confirmButtonText: "Cool"
//                 });
//                 navigate("/"); 
//             }
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//         // Add a fail alert so the user knows why they aren't moving
//         Swal.fire({
//             title: "Error!",
//             text: error.message,
//             icon: "error",
//         });
//       });
//   };

//   // ... rest of your return code remains the same

//   return (
//     <div>
//       <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
//         <div className="card-body">
//           <h1 className="text-5xl font-bold">Signin now!</h1>
//           <form onSubmit={handleSignin} className="fieldset">
//             <label className="label">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="input"
//               placeholder="Email"
//               required
//             />
//             <label className="label">Password</label>
//             <input
//               type="password"
//               className="input"
//               name="password"
//               placeholder="Password"
//               required
//             />
//             <div>
//               <a className="link link-hover">Forgot password?</a>
//             </div>
//             <button className="btn btn-neutral mt-4">SignIn</button>
//           </form>
//         </div>
//       </div>

//       <div className="flex justify-center mt-20">
//         <button className="btn btn-lg bg-green-400">
//           <Link to="/">Home</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Signin;




import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const inputCls = "w-full px-4 py-3 bg-amber-950/20 border border-amber-900/30 rounded-xl text-amber-100 text-sm placeholder-amber-950 outline-none focus:border-amber-600/60 focus:bg-amber-900/20 transition-all duration-200";
const labelCls = "block text-amber-800 text-xs tracking-widest uppercase font-semibold mb-2 mt-5";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        const signInInfo = {
          email,
          lastSignInTime: user?.metadata?.lastSignInTime,
        };

        axios.patch("https://coffee-management-server.vercel.app/users", signInInfo).then((data) => {
          console.log("after patch", data.data);
          if (data.data.matchedCount > 0) {
            Swal.fire({
              title: "Welcome back!",
              text: "You've signed in successfully.",
              icon: "success",
              confirmButtonText: "Continue",
              confirmButtonColor: "#a0522d",
              background: "#0c0a09",
              color: "#fef3c7",
              timer: 1500,
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Sign In Failed",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#a0522d",
          background: "#0c0a09",
          color: "#fef3c7",
        });
      });
  };

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4 py-14">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-stone-900 border border-amber-900/25 rounded-3xl p-10 shadow-2xl shadow-black/60">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">☕</div>
            <h1 className="text-amber-50 font-bold text-3xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Welcome Back
            </h1>
            <p className="text-amber-900 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Sign in to your Espresso Emporium account
            </p>
          </div>

          <form onSubmit={handleSignin}>
            <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Email</label>
            <input type="email" name="email" className={inputCls} placeholder="you@example.com" required style={{ fontFamily: "'DM Sans', sans-serif" }} />

            <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Password</label>
            <input type="password" name="password" className={inputCls} placeholder="Your password" required style={{ fontFamily: "'DM Sans', sans-serif" }} />

            <div className="flex justify-end mt-2">
              <a href="#" className="text-amber-900 text-xs hover:text-amber-500 no-underline transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full mt-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-900 font-bold rounded-xl text-base tracking-wide transition-all duration-200 shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 hover:-translate-y-0.5 border-0 cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-amber-900 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            New here?{" "}
            <Link to="/signup" className="text-amber-500 font-semibold no-underline hover:text-amber-300 transition-colors">
              Create an account
            </Link>
          </p>
        </div>

        <div className="text-center mt-5">
          <Link to="/" className="text-amber-900 text-sm no-underline hover:text-amber-600 transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
