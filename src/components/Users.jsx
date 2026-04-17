import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://coffee-management-server.vercel.app/users/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {


                const remainingUsers = users.filter((user) => user._id !== id);
                setUsers(remainingUsers);

               //ToDo delete user from firebase auth as well



                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });

        
        } else if (result.dismiss === Swal.DismissReason.cancel)
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Users : {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>

              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.phone}</td>
                <td>{user.email}</td>

                <th>
                  <button className="btn btn-xs">V</button>
                  <button className="btn btn-xs">E</button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary bg-amber-300 "><Link to='/'>Home</Link></button>
    </div>
  );
};

export default Users;
