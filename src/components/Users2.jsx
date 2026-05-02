import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Users2 = () => {

//   const [users, setUsers] = useState([]);
// useEffect(()=>{
//     fetch("https://coffee-management-server.vercel.app/users")
//     .then(res=>res.json())
//     .then(data=>setUsers(data))
// },[])

const {isPending, isError,error, data: users}= useQuery({
    queryKey:["users"],
    queryFn: async ()=>{
        const res =await fetch("https://coffee-management-server.vercel.app/users");
        return res.json();
    }
})

  

  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove this customer?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#a0522d",
      cancelButtonColor: "#1c1917",
      confirmButtonText: "Yes, remove",
      cancelButtonText: "Cancel",
      background: "#0c0a09",
      color: "#fef3c7",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-management-server.vercel.app/users/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
            //   setUsers(users.filter((u) => u._id !== id));
              Swal.fire({
                title: "Removed",
                text: "Customer has been deleted.",
                icon: "success",
                background: "#0c0a09",
                color: "#fef3c7",
                confirmButtonColor: "#a0522d",
              });
            }
          });
      }
    });
  };

  if(isPending){
     return <span className="loading loading-spinner text-primary"></span>
  }
  if(isError){
    return <p className="text-red-500">Error: {error.message}</p>
  }

  return <div className="min-h-screen bg-stone-950 px-6 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeInUp 0.5s ease both; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-up">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ✦ Customers
          </p>
          <div className="flex flex-wrap justify-between items-end gap-4">
            <h1 className="text-amber-50 font-bold text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Registered Users
            </h1>
            <span
              className="text-amber-900 text-sm bg-amber-900/10 border border-amber-900/20 rounded-lg px-4 py-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {users.length} member{users.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Table card */}
        <div className="bg-stone-900 border border-amber-900/20 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 fade-up">
          {/* Head */}
          <div className="grid grid-cols-12 px-7 py-4 border-b border-amber-900/15 bg-amber-950/10">
            {[
              { label: "Customer", col: "col-span-4" },
              { label: "Phone", col: "col-span-2" },
              { label: "Email", col: "col-span-3" },
              { label: "Last Sign In", col: "col-span-2" },
              { label: "Actions", col: "col-span-1" },
            ].map(({ label, col }) => (
              <div
                key={label}
                className={`${col} text-amber-900 text-xs tracking-widest uppercase font-semibold`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Rows */}
          {users.length === 0 ? (
            <div className="text-center py-16 text-amber-900 italic text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              No customers yet.
            </div>
          ) : (
            users?.map((user, i) => (
              <div
                key={user._id}
                className="grid grid-cols-12 px-7 py-4 items-center border-b border-amber-900/10 last:border-0 hover:bg-amber-950/10 transition-colors duration-150"
              >
                {/* Name + avatar */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-900/30 shrink-0 bg-stone-800 flex items-center justify-center">
                    {user.photo ? (
                      <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-amber-400 font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {user.name?.[0]?.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-amber-100 font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{user.name}</p>
                    <p className="text-amber-950 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{user.address}</p>
                  </div>
                </div>

                <div className="col-span-2 text-amber-800 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {user.phone}
                </div>

                <div className="col-span-3 text-amber-900 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {user.email}
                </div>

                <div className="col-span-2 text-amber-950 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {user.lastSignInTime
                    ? new Date(user.lastSignInTime).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                    : "—"}
                </div>

                <div className="col-span-1">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-900 bg-red-950/20 border border-red-900/20 hover:bg-red-900/30 hover:text-red-400 hover:border-red-800/40 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Back */}
        <div className="mt-8">
          <Link to="/" className="no-underline">
            <button
              className="py-2.5 px-6 text-amber-800 bg-amber-900/10 border border-amber-900/25 hover:text-amber-200 hover:border-amber-700/50 hover:bg-amber-900/20 rounded-xl text-sm transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>;
};

export default Users2;
