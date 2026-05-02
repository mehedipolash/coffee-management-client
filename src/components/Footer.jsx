// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer sm:footer-horizontal footer-center bg-olive-400 text-olive-800 font-bold text-2xl p-4">
//       <aside>
//         <p>
//           Copyright © {new Date().getFullYear()} - All right reserved by Espresso_Emporium
//         </p>
//       </aside>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');`}</style>
      <footer className="bg-stone-950 border-t border-amber-900/20 pt-12 pb-7 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top */}
          <div className="flex flex-wrap justify-between gap-10 pb-10 border-b border-amber-900/15">
            {/* Brand */}
            <div>
              <p className="text-amber-50 font-bold text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                ☕ Espresso Emporium
              </p>
              <p className="text-amber-900 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Curating the finest coffee experiences from around the world.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-16 flex-wrap">
              <div>
                <p className="text-amber-600 text-xs tracking-widest uppercase font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Navigate
                </p>
                {[{ to: "/", label: "Home" }, { to: "/addCoffee", label: "Add Coffee" }, { to: "/users", label: "Customers" }].map(({ to, label }) => (
                  <div key={to} className="mb-2">
                    <Link to={to} className="text-amber-900 hover:text-amber-500 text-sm no-underline transition-colors duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-amber-600 text-xs tracking-widest uppercase font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Account
                </p>
                {[{ to: "/signin", label: "Sign In" }, { to: "/signup", label: "Sign Up" }].map(({ to, label }) => (
                  <div key={to} className="mb-2">
                    <Link to={to} className="text-amber-900 hover:text-amber-500 text-sm no-underline transition-colors duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-wrap justify-between items-center gap-4 pt-6">
            <p className="text-amber-950 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} Espresso Emporium. All rights reserved.
            </p>
            <p className="text-amber-950 text-xs italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Crafted with passion & caffeine ✦
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

