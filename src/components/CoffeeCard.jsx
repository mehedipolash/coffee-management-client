// import React from "react";
// import { Link } from "react-router";
// import Swal from "sweetalert2";

// const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // start deleting the coffee
//         fetch(`https://coffee-management-server.vercel.app/coffees/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount) {
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success",
//               });

//               //remove the coffee from the state
//               const remainingCoffees = coffees.filter((coffee) => coffee._id !== _id);
//               setCoffees(remainingCoffees);

//             }
//           });
//       }
//     });
//   };

//   const { name, photo, quantity, price, _id } = coffee;

//   return (
//     <div className="card card-side bg-base-100 shadow-sm border border-gray-300">
//       <figure>
//         <img src={photo} alt={name} />
//       </figure>

//       <div className="flex w-full justify-around mt-8">
//         <div>
//           <h2>{name}</h2>
//           <p>Price: {price}</p>
//           <p>Quantity: {quantity}</p>
//         </div>

//         <div className="card-actions">
//           <div className="join join-vertical space-y-2">
//             <Link to={`/coffee/${_id}`}>
//               <button className="btn join-item">View</button>
//             </Link>
//             <Link to={`/updateCoffee/${_id}`}>
//               <button className="btn join-item">Edit</button>
//             </Link>
//             <button
//               onClick={() => handleDelete(_id)}
//               className="btn join-item"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoffeeCard;


import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Remove this coffee?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#a0522d",
      cancelButtonColor: "#1c1917",
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Keep it",
      background: "#0c0a09",
      color: "#fef3c7",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-management-server.vercel.app/coffees/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Removed!",
                text: "Coffee deleted from collection.",
                icon: "success",
                background: "#0c0a09",
                color: "#fef3c7",
                confirmButtonColor: "#a0522d",
              });
              setCoffees(coffees.filter((c) => c._id !== _id));
            }
          });
      }
    });
  };

  const { name, photo, quantity, price, taste, _id } = coffee;

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');`}</style>
      <div className="group flex bg-stone-950 border border-amber-900/20 rounded-2xl overflow-hidden hover:border-amber-700/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-amber-950/60 hover:shadow-2xl">
        {/* Image */}
        <div className="w-44 shrink-0 relative overflow-hidden bg-stone-900">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-950/80" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-5">
          <div>
            {taste && (
              <span
                className="inline-block text-amber-500 bg-amber-500/10 border border-amber-700/30 rounded text-xs tracking-widest uppercase px-3 py-1 mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {taste}
              </span>
            )}
            <h3 className="text-amber-50 text-xl font-bold leading-tight mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              {name}
            </h3>
            <div className="flex gap-6">
              <div>
                <p className="text-amber-900 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Price</p>
                <p className="text-amber-400 text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>${price}</p>
              </div>
              <div>
                <p className="text-amber-900 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>In Stock</p>
                <p className="text-amber-200 text-base font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>{quantity}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-5">
            <Link to={`/coffee/${_id}`} className="no-underline">
              <button
                className="text-amber-500 bg-amber-500/10 border border-amber-700/30 hover:bg-amber-500/20 hover:border-amber-500/60 rounded-lg px-4 py-2 text-xs tracking-wide font-medium transition-all duration-200 cursor-pointer"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View
              </button>
            </Link>
            <Link to={`/updateCoffee/${_id}`} className="no-underline">
              <button
                className="text-stone-900 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-lg px-4 py-2 text-xs tracking-wide font-bold transition-all duration-200 shadow-md shadow-amber-900/40 cursor-pointer border-0"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="text-red-800 bg-red-950/30 border border-red-900/20 hover:bg-red-900/30 hover:text-red-400 hover:border-red-700/40 rounded-lg px-4 py-2 text-xs tracking-wide font-medium transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
