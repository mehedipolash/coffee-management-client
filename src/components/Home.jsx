// import React, { use, useState } from 'react';
// import { Link, useLoaderData } from 'react-router';
// import CoffeeCard from './CoffeeCard';

// const Home = () => {
//     const initialCoffees = useLoaderData();
//     const [coffees,setCoffees] = useState(initialCoffees);


//     return (
//         <div className='mt-12'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 {
//                     coffees.map(coffee=><CoffeeCard coffee={coffee} key={coffee._id}
//                     coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
//                 }
//             </div>
//             <div className='text-center mt-12 '>
//                 <div>
//                     <Link  to="/signup" className="btn gap-x-5 btn-primary mr-5 bg-purple-600 border-0">
//                     Signup
//                 </Link>

//                  <Link to="/signin" className="btn border-0 btn-primary bg-green-600">
//                     SignIn
//                 </Link>

//                 <Link to="/users" className="btn border-0 btn-primary bg-blue-600 ml-5">
//                     Users
//                 </Link>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Home;

import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div className="min-h-screen bg-stone-950">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeInUp 0.6s ease both; }
        .fade-up-1 { animation: fadeInUp 0.6s ease 0.1s both; }
        .fade-up-2 { animation: fadeInUp 0.6s ease 0.2s both; }
        .fade-up-3 { animation: fadeInUp 0.6s ease 0.3s both; }
      `}</style>

      {/* Hero */}
      <div className="text-center px-6 py-20 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-48 bg-amber-700/10 rounded-full blur-3xl" />
        </div>

        <p className="text-amber-500 text-xs tracking-widest uppercase mb-4 fade-up" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          ✦ Our Collection ✦
        </p>

        <h1 className="text-amber-50 font-bold text-5xl md:text-6xl leading-tight mb-4 fade-up-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Exceptional Coffees,<br />
          <em className="text-amber-400 italic">Curated for You</em>
        </h1>

        <p className="text-amber-900 text-base leading-relaxed max-w-md mx-auto mb-10 fade-up-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Discover handpicked blends from the world's finest coffee regions. Every cup tells a story.
        </p>

        {/* Pills */}
        <div className="flex justify-center flex-wrap gap-3 fade-up-3">
          <Link
            to="/addCoffee"
            className="bg-gradient-to-r from-amber-400 to-amber-600 text-stone-900 font-bold px-6 py-2.5 rounded-full text-sm tracking-wide no-underline transition-all duration-200 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-900/30"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            + Add Coffee
          </Link>
          {[
            { to: "/signup", label: "Create Account" },
            { to: "/signin", label: "Sign In" },
            { to: "/users", label: "Customers" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-amber-700 bg-amber-900/10 border border-amber-900/25 hover:text-amber-200 hover:border-amber-700/50 hover:bg-amber-900/20 px-6 py-2.5 rounded-full text-sm tracking-wide no-underline transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 border-t border-amber-900/15 mb-10" />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {coffees.length === 0 ? (
          <div className="text-center py-20 text-amber-900 italic text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            No coffees yet.{" "}
            <Link to="/addCoffee" className="text-amber-500 no-underline hover:text-amber-300">
              Add your first blend →
            </Link>
          </div>
        ) : (
          <>
            <p className="text-amber-900/60 text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {coffees.length} blend{coffees.length !== 1 ? "s" : ""} available
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {coffees.map((coffee) => (
                <CoffeeCard
                  key={coffee._id}
                  coffee={coffee}
                  coffees={coffees}
                  setCoffees={setCoffees}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
