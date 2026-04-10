// import React, { use } from "react";
// import { AuthContext } from "../context/AuthContext";
// import Swal from "sweetalert2";

// const Signup = () => {
//   const { createUser } = use(AuthContext);
//   console.log(createUser);

//   const handleSignup = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);

//     const { email, password, ...userProfile } = Object.fromEntries(
//       formData.entries(),
//     );

//     console.log(email, password, userProfile);

//     //create user in the firebase
//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;

//         // save user profile in the database

//         fetch("http://localhost:3000/users", {
//           method: "POST",
//           headers: { "content-type": "application/json" },
//           body: JSON.stringify({ userProfile }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.insertedId) {
//               Swal.fire({
//                 position: "center",
//                 title: "User created successfully",

//                 icon: "success",
//                 confirmButton: false,
//                 timer: 1500,
//               });
//             }
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl">
//       <div className="card-body">
//         <h1 className="text-5xl font-bold">Signup now!</h1>
//         <form onSubmit={handleSignup} className="fieldset">
//           <label className="label">Name</label>
//           <input type="text" name="name" className="input" placeholder="Name" />
//           <label className="label">Address</label>
//           <input
//             type="text"
//             name="address"
//             className="input"
//             placeholder="Address"
//           />
//           <label className="label">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             className="input"
//             placeholder="Phone"
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
//           />
//           <label className="label">Password</label>
//           <input
//             type="password"
//             className="input"
//             name="password"
//             placeholder="Password"
//           />
//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           <button className="btn btn-neutral mt-4">Signup</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

//

import React from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = React.use(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries(),
    );

    console.log(email, password, userProfile);

    //create user in the firebase
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // save user profile in the database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ userProfile }), // Include email in userProfile
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                title: "User created successfully",
                icon: "success",
                confirmButtonText: "OK",
                timer: 1500,
              });
              form.reset(); // Reset form on success
            }
          })
          .catch((dbError) => {
            console.error("Database error:", dbError);
            Swal.fire({
              title: "Error!",
              text: "Failed to save user data to database",
              icon: "error",
              
            });
          });
      })
      .catch((error) => {
        console.log(error);

        // Show SweetAlert for Firebase errors
        let errorMessage = "Something went wrong!";
        if (error.code === "auth/email-already-in-use") {
          errorMessage =
            "This email is already registered. Please use a different email or sign in.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "Password should be at least 6 characters.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Please enter a valid email address.";
        }

        Swal.fire({
          title: "Signup Failed!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Signup now!</h1>
        <form onSubmit={handleSignup} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
            required
          />
          <label className="label">Phone</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="Phone"
            required
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
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
    </div>
  );
};

export default Signup;
