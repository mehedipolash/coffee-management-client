

// import React from "react";
// import { AuthContext } from "../context/AuthContext";
// import Swal from "sweetalert2";
// import { Link } from "react-router";
// import axios from "axios";

// const Signup = () => {
//   const { createUser } = React.use(AuthContext);

//   const handleSignup = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);

//     const { email, password, ...restFormData } = Object.fromEntries(
//       formData.entries(),
//     );

//     console.log(email, password, restFormData);

//     //create user in the firebase
//     createUser(email, password)
//       .then((result) => {

//         const userProfile={
//           email,
//           ...restFormData,
//           creationTime: result.user?.metadata?.creationTime,
//           lastSignInTime: result.user?.metadata?.lastSignInTime,
//         }

//         // using axios
//         axios.post('https://coffee-management-server.vercel.app/users', userProfile)
//         .then(data =>{
//           if(data.data.insertedId){
//             Swal.fire({
//               position: "center",
//               title: "User created successfully",
//               icon: "success",
//               confirmButtonText: "OK",
//               timer: 1500,
//             });
//             form.reset(); // Reset form on success
//           }
//         })





//         // save user profile in the database using fetch 
//         // fetch("https://coffee-management-server.vercel.app/users", {
//         //   method: "POST",
//         //   headers: { "content-type": "application/json" },
//         //   body: JSON.stringify({ ...userProfile })
//         // })
//         //   .then((res) => res.json())
//         //   .then((data) => {
//         //     if (data.insertedId) {
//         //       Swal.fire({
//         //         position: "center",
//         //         title: "User created successfully",
//         //         icon: "success",
//         //         confirmButtonText: "OK",
//         //         timer: 1500,
//         //       });
//         //       form.reset(); // Reset form on success
//         //     }
//         //   })
//           .catch((dbError) => {
//             console.error("Database error:", dbError);
//             Swal.fire({
//               title: "Error!",
//               text: "Failed to save user data to database",
//               icon: "error",
              
//             });
//           });
//       })
//       .catch((error) => {
//         console.log(error);

//         // Show SweetAlert for Firebase errors
//         let errorMessage = "Something went wrong!";
//         if (error.code === "auth/email-already-in-use") {
//           errorMessage =
//             "This email is already registered. Please use a different email or sign in.";
//         } else if (error.code === "auth/weak-password") {
//           errorMessage = "Password should be at least 6 characters.";
//         } else if (error.code === "auth/invalid-email") {
//           errorMessage = "Please enter a valid email address.";
//         }

//         Swal.fire({
//           title: "Signup Failed!",
//           text: errorMessage,
//           icon: "error",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   return (
//     <div>
//       <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
//       <div className="card-body">
//         <h1 className="text-5xl font-bold">Signup now!</h1>
//         <form onSubmit={handleSignup} className="fieldset">
//           <label className="label">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="input"
//             placeholder="Name"
//             required
//           />
//           <label className="label">Address</label>
//           <input
//             type="text"
//             name="address"
//             className="input"
//             placeholder="Address"
//             required
//           />
//           <label className="label">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             className="input"
//             placeholder="Phone"
//             required
//           />
//           <label className="label">Photo</label>
//           <input
//             type="text"
//             name="photo"
//             className="input"
//             placeholder="Photo URL"
//           />
//           <label className="label">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="input"
//             placeholder="Email"
//             required
//           />
//           <label className="label">Password</label>
//           <input
//             type="password"
//             className="input"
//             name="password"
//             placeholder="Password"
//             required
//           />
//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           <button className="btn btn-neutral mt-4">Signup</button>
//         </form>
//       </div>
       
//     </div>
//     <div className="flex justify-center mt-20">
//         <button className="btn btn-lg bg-green-400">
//           <Link to="/">Home</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import axios from "axios";

const inputCls = "w-full px-4 py-3 bg-amber-950/20 border border-amber-900/30 rounded-xl text-amber-100 text-sm placeholder-amber-950 outline-none focus:border-amber-600/60 focus:bg-amber-900/20 transition-all duration-200";
const labelCls = "block text-amber-800 text-xs tracking-widest uppercase font-semibold mb-2 mt-5";

const Signup = () => {
  const { createUser } = React.use(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        axios.post("https://coffee-management-server.vercel.app/users", userProfile)
          .then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "center",
                title: "Welcome to Espresso Emporium!",
                text: "Your account has been created.",
                icon: "success",
                confirmButtonText: "Let's Go",
                confirmButtonColor: "#a0522d",
                background: "#0c0a09",
                color: "#fef3c7",
                timer: 2000,
              });
              form.reset();
            }
          })
          .catch((dbError) => {
            console.error("Database error:", dbError);
            Swal.fire({
              title: "Error!",
              text: "Failed to save user data.",
              icon: "error",
              background: "#0c0a09",
              color: "#fef3c7",
              confirmButtonColor: "#a0522d",
            });
          });
      })
      .catch((error) => {
        console.log(error);
        let errorMessage = "Something went wrong!";
        if (error.code === "auth/email-already-in-use") errorMessage = "This email is already registered.";
        else if (error.code === "auth/weak-password") errorMessage = "Password should be at least 6 characters.";
        else if (error.code === "auth/invalid-email") errorMessage = "Please enter a valid email address.";

        Swal.fire({
          title: "Signup Failed",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Try Again",
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

      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-stone-900 border border-amber-900/25 rounded-3xl p-10 shadow-2xl shadow-black/60">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">☕</div>
            <h1 className="text-amber-50 font-bold text-3xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Create Account
            </h1>
            <p className="text-amber-900 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Join the Espresso Emporium community
            </p>
          </div>

          <form onSubmit={handleSignup}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Name</label>
                <input type="text" name="name" className={inputCls} placeholder="Full name" required style={{ fontFamily: "'DM Sans', sans-serif" }} />
              </div>
              <div>
                <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Phone</label>
                <input type="text" name="phone" className={inputCls} placeholder="+1 234 567" required style={{ fontFamily: "'DM Sans', sans-serif" }} />
              </div>
            </div>

            <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Address</label>
            <input type="text" name="address" className={inputCls} placeholder="Your address" required style={{ fontFamily: "'DM Sans', sans-serif" }} />

            <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Photo URL</label>
            <input type="text" name="photo" className={inputCls} placeholder="https://..." style={{ fontFamily: "'DM Sans', sans-serif" }} />

            <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Email</label>
            <input type="email" name="email" className={inputCls} placeholder="you@example.com" required style={{ fontFamily: "'DM Sans', sans-serif" }} />

            <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Password</label>
            <input type="password" name="password" className={inputCls} placeholder="Min. 6 characters" required style={{ fontFamily: "'DM Sans', sans-serif" }} />

            <button
              type="submit"
              className="w-full mt-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-900 font-bold rounded-xl text-base tracking-wide transition-all duration-200 shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 hover:-translate-y-0.5 border-0 cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-amber-900 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Already a member?{" "}
            <Link to="/signin" className="text-amber-500 font-semibold no-underline hover:text-amber-300 transition-colors">
              Sign in
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

export default Signup;
