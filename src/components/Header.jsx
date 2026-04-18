/* import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-olive-400 text-olive-800 font-bold text-8xl">
      <button className="btn btn-ghost text-xl">Espresso_Emporium</button>
    </div>
  );
};

export default Header;
 */


// import React from "react";
// import { Link, NavLink } from "react-router";

// const Header = () => {
//   const links = (
//     <>
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/addcoffee">Add Coffee</NavLink></li>
//       <li><NavLink to="/users">Users</NavLink></li>
//       <li><NavLink to="/signup">SignUp</NavLink></li>
//       <li><NavLink to="/signin">SignIn</NavLink></li>
//     </>
//   );

//   return (
//     <div className="text-2xl navbar bg-olive-400 text-olive-800 shadow-lg px-4 md:px-8">
//       <div className="navbar-start">
//         {/* Dropdown for Mobile */}
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-olive-400 text-olive-800 rounded-box w-52 ">
//             {links}
//           </ul>
//         </div>
//         <Link to="/" className="text-xl font-bold tracking-widest uppercase">
//           Espresso_Emporium
//         </Link>
//       </div>

//       {/* Horizontal Menu for Desktop */}
//       <div className="navbar-end hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-2">
//           {links}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  // We apply text-lg or text-xl here to make the links bigger
  const links = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-lg font-semibold ${isActive ? 'text-purple-700 underline' : 'hover:text-purple-600'}`
          }
        >Home</NavLink>
      </li>
      <li>
        <NavLink 
          to="/addcoffee" 
          className={({ isActive }) => 
            `text-lg font-semibold ${isActive ? 'text-purple-700 underline' : 'hover:text-purple-600'}`
          }
        >Add Coffee</NavLink>
      </li>
      <li>
        <NavLink 
          to="/users" 
          className={({ isActive }) => 
            `text-lg font-semibold ${isActive ? 'text-purple-700 underline' : 'hover:text-purple-600'}`
          }
        >Users</NavLink>
      </li>
      <li>
        <NavLink 
          to="/signup" 
          className={({ isActive }) => 
            `text-lg font-semibold ${isActive ? 'text-purple-700 underline' : 'hover:text-purple-600'}`
          }
        >SignUp</NavLink>
      </li>
      <li>
        <NavLink 
          to="/signin" 
          className={({ isActive }) => 
            `text-lg font-semibold ${isActive ? 'text-purple-700 underline' : 'hover:text-purple-600'}`
          }
        >SignIn</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-olive-400 text-olive-800 shadow-xl px-4 md:px-12 py-4">
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-olive-200 rounded-box w-52 border border-olive-500">
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-black tracking-tighter uppercase italic">
          Espresso_Emporium
        </Link>
      </div>

      {/* Horizontal Menu for Desktop */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Header;