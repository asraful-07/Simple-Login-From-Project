import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { treatment, image, description, cost, id } = service;
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={image}
        alt={treatment}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{treatment}</h2>
        <p className="text-gray-600 mb-4">
          {description.slice(0, 100)}...{" "}
          <span className="text-blue-600 cursor-pointer">read more</span>
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${cost}</span>
          <NavLink to={`/details/${id}`}>
            <button className="btn btn-primary">Checkout More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
