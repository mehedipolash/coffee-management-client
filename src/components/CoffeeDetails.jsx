// import React from "react";
// import { Link, useLoaderData } from "react-router";

// const CoffeeDetails = () => {
//   const coffee = useLoaderData();
//   const { name, photo, quantity, price, taste, details } = coffee;

//   return (
//     <div className="p-8">
//       <div className=" rounded-xl p-8 flex flex-col md:flex-row items-center gap-10">
        
//         {/* Left Image */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src={photo}
//             alt={name}
//             className="object-contain"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="flex-1 space-y-3">
//           <h2 className="text-3xl font-bold text-[#3C2A21] mb-4">
//             Niceties
//           </h2>

//           <p><span className="font-semibold">Name:</span> {name}</p>
//           <p><span className="font-semibold">Price:</span> ${price}</p>
//           <p><span className="font-semibold">Quantity:</span> {quantity}</p>
//           <p><span className="font-semibold">Taste:</span> {taste}</p>
//           <p><span className="font-semibold">Details:</span> {details}</p>
//         </div>

//       </div>
//      <Link to="/" className="btn btn-primary mt-4">
//         Back to Home
//       </Link>
       
//        </div>
//   );
// };

// export default CoffeeDetails;


import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, photo, quantity, price, taste, details } = coffee;

  return (
    <div className="min-h-screen bg-stone-950 px-6 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.5s ease both; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-10 fade-in">
          <Link
            to="/"
            className="text-amber-900 hover:text-amber-500 text-sm no-underline transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ← Back to Collection
          </Link>
        </div>

        {/* Main card */}
        <div className="bg-stone-900 border border-amber-900/25 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-96 shadow-2xl shadow-black/70 fade-in">
          {/* Image panel */}
          <div className="md:w-5/12 shrink-0 relative overflow-hidden bg-stone-950 min-h-64">
            <img src={photo} alt={name} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-900/90 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent md:hidden" />

            {/* Price badge */}
            <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-sm border border-amber-700/40 rounded-xl px-4 py-3">
              <p className="text-amber-600 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Price</p>
              <p className="text-amber-50 text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>${price}</p>
            </div>
          </div>

          {/* Content panel */}
          <div className="flex-1 p-10 flex flex-col justify-center">
            {taste && (
              <span
                className="inline-block text-amber-500 bg-amber-500/10 border border-amber-700/30 rounded text-xs tracking-widest uppercase px-3 py-1 mb-4 w-fit"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {taste}
              </span>
            )}

            <h1 className="text-amber-50 font-bold text-4xl leading-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {name}
            </h1>

            {/* Accent line */}
            <div className="w-14 h-px bg-gradient-to-r from-amber-500 to-transparent my-5" />

            {details && (
              <p className="text-amber-900 text-sm leading-relaxed mb-7" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {details}
              </p>
            )}

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-9">
              {[
                { label: "In Stock", value: quantity },
                { label: "Taste Profile", value: taste || "—" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-amber-950/20 border border-amber-900/20 rounded-xl p-4">
                  <p className="text-amber-900 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
                  <p className="text-amber-200 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{value}</p>
                </div>
              ))}
            </div>

            <Link to="/" className="no-underline w-fit">
              <button
                className="py-3 px-7 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-900 font-bold rounded-xl text-sm tracking-wide transition-all duration-200 shadow-md shadow-amber-900/30 hover:-translate-y-0.5 border-0 cursor-pointer"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                ← Back to Collection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
