import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, photo, quantity, price, taste, details } = coffee;

  return (
    <div className="p-8">
      <div className=" rounded-xl p-8 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={photo}
            alt={name}
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold text-[#3C2A21] mb-4">
            Niceties
          </h2>

          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Price:</span> ${price}</p>
          <p><span className="font-semibold">Quantity:</span> {quantity}</p>
          <p><span className="font-semibold">Taste:</span> {taste}</p>
          <p><span className="font-semibold">Details:</span> {details}</p>
        </div>

      </div>
     <Link to="/" className="btn btn-primary mt-4">
        Back to Home
      </Link>
       
       </div>
  );
};

export default CoffeeDetails;