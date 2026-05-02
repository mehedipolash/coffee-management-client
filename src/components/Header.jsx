// import React from "react";

// const Header = () => {
//   return (
//     <div className="navbar bg-olive-400 text-olive-800 font-bold text-8xl">
//       <button className="btn btn-ghost text-xl">Espresso_Emporium</button>
//     </div>
//   );
// };

// export default Header;
import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');`}</style>
      <header className="sticky top-0 z-50 bg-stone-950 border-b border-amber-900/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-lg shadow-lg shadow-amber-900/40">
              ☕
            </div>
            <div>
              <p className="text-amber-50 font-bold text-lg leading-none m-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                Espresso
              </p>
              <p className="text-amber-500 text-xs tracking-widest uppercase m-0" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Emporium
              </p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/addCoffee", label: "Add Coffee" },
              { to: "/users", label: "Customers" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-amber-700 hover:text-amber-200 hover:bg-amber-900/30 px-4 py-2 rounded-lg text-sm tracking-wide transition-all duration-200 no-underline border border-transparent hover:border-amber-800/40"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/signin"
              className="ml-2 bg-gradient-to-r from-amber-400 to-amber-600 text-stone-900 font-bold px-5 py-2 rounded-lg text-sm tracking-wide transition-all duration-200 hover:from-amber-300 hover:to-amber-500 shadow-md shadow-amber-900/40 no-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sign In
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
