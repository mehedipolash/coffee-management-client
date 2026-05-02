// import React from "react";
// import Swal from "sweetalert2";

// const AddCoffee = () => {

//     const handleAddCoffee = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const formData = new FormData(form);
//         const newCoffee = Object.fromEntries(formData.entries());
//         console.log(newCoffee);


//         // send data to the server
//         fetch("https://coffee-management-server.vercel.app/coffees", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newCoffee)
//         })
//         .then(res => res.json())
//         .then(data => {
//            if(data.insertedId){
//             Swal.fire({
//                 title: 'Coffee added successfully',
//                 icon:"success",
//                 draggable: true,
//                 })
//                 // form.reset();
//            }
//         })

//     };


//   return (
//     <div className="p-24">
//       <div className="p-12 text-center space-y-4">
//         <h1 className="lg:text-6xl md:text-4xl  sm:text-4xl">AddCoffee</h1>
//         <p>
//           It is a long established fact that a reader will be distraceted by the
//           readable content of a page when looking at its layout. The point of
//           using Lorem Ipsum is that it has a more-or-less normal distribution of
//           letters, as opposed to using Content here.
//         </p>
//       </div>
//       <form onSubmit={handleAddCoffee}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Name</label>
//             <input
//               type="text"
//               name="name"
//               className="input w-full"
//               placeholder="Coffee Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Quantity</label>
//             <input
//               type="text"
//               name="quantity"
//               className="input w-full"
//               placeholder="Quantity"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Supplier</label>
//             <input
//               type="text"
//               name="supplier"
//               className="input w-full"
//               placeholder="Supplier Name"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Taste</label>
//             <input
//               type="text"
//               name="taste"
//               className="input w-full"
//               placeholder="Taste"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Price</label>
//             <input
//               type="text"
//               name="price"
//               className="input w-full"
//               placeholder="Price"
//             />
//           </fieldset>
//           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Details</label>
//             <input
//               type="text"
//               name="details"
//               className="input w-full"
//               placeholder="Details"
//             />
//           </fieldset>
//         </div>
//         <fieldset className="my-6 fieldset bg-base-200 border-base-300 rounded-box  border p-4">
//             <label className="label">Photo</label>
//             <input
//               type="text"
//               name="photo"
//               className="input w-full"
//               placeholder="Photo URL"
//             />
//           </fieldset>
//           <input type="submit" value="Add Coffee" className="btn w-full" />
//       </form>
//     </div>
//   );
// };

// export default AddCoffee;
import React from "react";
import Swal from "sweetalert2";

const inputCls = "w-full px-4 py-3 bg-amber-950/20 border border-amber-900/30 rounded-xl text-amber-100 text-sm placeholder-amber-950 outline-none focus:border-amber-600/60 focus:bg-amber-900/20 transition-all duration-200";
const labelCls = "block text-amber-800 text-xs tracking-widest uppercase font-semibold mb-2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    fetch("https://coffee-management-server.vercel.app/coffees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added!",
            text: `${newCoffee.name} has been added to the collection.`,
            icon: "success",
            confirmButtonColor: "#a0522d",
            background: "#0c0a09",
            color: "#fef3c7",
          });
        }
      });
  };

  const fields = [
    { name: "name", label: "Coffee Name", placeholder: "e.g. Ethiopian Yirgacheffe" },
    { name: "quantity", label: "Quantity", placeholder: "e.g. 500g" },
    { name: "supplier", label: "Supplier", placeholder: "Supplier name" },
    { name: "taste", label: "Tasting Notes", placeholder: "e.g. Floral, citrus, bright" },
    { name: "price", label: "Price", placeholder: "e.g. 18.99" },
    { name: "details", label: "Details", placeholder: "Origin, roast level, etc." },
  ];

  return (
    <div className="min-h-screen bg-stone-950 px-6 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      <div className="max-w-2xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ✦ Collection Management
          </p>
          <h1 className="text-amber-50 font-bold text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Add New Coffee
          </h1>
          <p className="text-amber-900 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Introduce a new blend to your curated collection
          </p>
        </div>

        {/* Form card */}
        <div className="bg-stone-900 border border-amber-900/25 rounded-3xl p-10 shadow-2xl shadow-black/60">
          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
              {fields.map(({ name, label, placeholder }) => (
                <div key={name}>
                  <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</label>
                  <input type="text" name={name} className={inputCls} placeholder={placeholder} style={{ fontFamily: "'DM Sans', sans-serif" }} />
                </div>
              ))}
            </div>

            <div className="mb-8">
              <label className={labelCls} style={{ fontFamily: "'DM Sans', sans-serif" }}>Photo URL</label>
              <input type="text" name="photo" className={inputCls} placeholder="https://example.com/coffee-image.jpg" style={{ fontFamily: "'DM Sans', sans-serif" }} />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-900 font-bold rounded-xl text-base tracking-wider transition-all duration-200 shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 hover:-translate-y-0.5 border-0 cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Add to Collection
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
