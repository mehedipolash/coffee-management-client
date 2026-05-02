// import React from "react";
// import { Link, useLoaderData } from "react-router";
// import Swal from "sweetalert2";

// const UpdateCoffee = () => {
//   const { _id, name, quantity, supplier, taste, price, details, photo } =
//     useLoaderData();

//   const handleUpdateCoffee = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const updatedCoffee = Object.fromEntries(formData.entries());
//     console.log(updatedCoffee);

//     // send the updated coffee to the database

//     fetch(`https://coffee-management-server.vercel.app/coffees/${_id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedCoffee),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Coffee Updated Successfully",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });
//   };
//   return (
//     <div className="p-24">
     
//       <div className="p-12 text-center space-y-4">
//         <h1 className="lg:text-6xl md:text-4xl  sm:text-4xl">Update Coffee</h1>
//       </div>
//       <form onSubmit={handleUpdateCoffee}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Name</label>
//             <input
//               type="text"
//               name="name"
//               defaultValue={name}
//               className="input w-full"
//               placeholder="Coffee Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Quantity</label>
//             <input
//               type="text"
//               name="quantity"
//               defaultValue={quantity}
//               className="input w-full"
//               placeholder="Quantity"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Supplier</label>
//             <input
//               type="text"
//               name="supplier"
//               defaultValue={supplier}
//               className="input w-full"
//               placeholder="Supplier Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Taste</label>
//             <input
//               type="text"
//               name="taste"
//               defaultValue={taste}
//               className="input w-full"
//               placeholder="Taste"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Price</label>
//             <input
//               type="text"
//               name="price"
//               defaultValue={price}
//               className="input w-full"
//               placeholder="Price"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Details</label>
//             <input
//               type="text"
//               name="details"
//               defaultValue={details}
//               className="input w-full"
//               placeholder="Details"
//             />
//           </fieldset>
//         </div>
//         <fieldset className="my-6 fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//           <label className="label">Photo</label>
//           <input
//             type="text"
//             name="photo"
//             defaultValue={photo}
//             className="input w-full"
//             placeholder="Photo URL"
//           />
//         </fieldset>
//         <input type="submit" value="Update Coffee" className="btn w-full" />
//       </form>
//        <Link to="/" className="btn btn-primary mt-4">
//         Back to Home
//       </Link>
//     </div>
//   );
// };

// export default UpdateCoffee;
import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const inputCls = "w-full px-4 py-3 bg-amber-950/20 border border-amber-900/30 rounded-xl text-amber-100 text-sm placeholder-amber-950 outline-none focus:border-amber-600/60 focus:bg-amber-900/20 transition-all duration-200";
const labelCls = "block text-amber-800 text-xs tracking-widest uppercase font-semibold mb-2";

const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, taste, price, details, photo } = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    fetch(`https://coffee-management-server.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Coffee Updated!",
            text: `${name} has been updated successfully.`,
            confirmButtonColor: "#a0522d",
            background: "#0c0a09",
            color: "#fef3c7",
            timer: 1800,
          });
        }
      });
  };

  const fields = [
    { name: "name", label: "Coffee Name", defaultValue: name, placeholder: "Coffee name" },
    { name: "quantity", label: "Quantity", defaultValue: quantity, placeholder: "e.g. 500g" },
    { name: "supplier", label: "Supplier", defaultValue: supplier, placeholder: "Supplier name" },
    { name: "taste", label: "Tasting Notes", defaultValue: taste, placeholder: "Flavour profile" },
    { name: "price", label: "Price", defaultValue: price, placeholder: "e.g. 18.99" },
    { name: "details", label: "Details", defaultValue: details, placeholder: "Additional details" },
  ];

  return (
    <div className="min-h-screen bg-stone-950 px-6 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ✦ Edit Entry
          </p>
          <h1 className="text-amber-50 font-bold text-5xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Update Coffee
          </h1>
          <p className="text-amber-400 italic text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            {name}
          </p>
        </div>

        {/* Form card */}
        <div className="bg-stone-900 border border-amber-900/25 rounded-3xl p-10 shadow-2xl shadow-black/60">
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
              {fields.map(({ name: fieldName, label, defaultValue, placeholder }) => (
                <div key={fieldName}>
                  <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</label>
                  <input
                    type="text"
                    name={fieldName}
                    defaultValue={defaultValue}
                    className={inputCls}
                    placeholder={placeholder}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              ))}
            </div>

            <div className="mb-8">
              <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className={inputCls}
                placeholder="https://example.com/coffee-image.jpg"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-900 font-bold rounded-xl text-base tracking-wide transition-all duration-200 shadow-lg shadow-amber-900/30 hover:-translate-y-0.5 border-0 cursor-pointer"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Save Changes
              </button>
              <Link to="/" className="no-underline">
                <button
                  type="button"
                  className="py-3.5 px-6 text-amber-700 bg-amber-900/10 border border-amber-900/30 hover:text-amber-200 hover:border-amber-700/50 hover:bg-amber-900/20 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  ← Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
