import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Details = () => {
  const { cost, treatment, description, image } = useLoaderData();

  return (
    <div className="flex items-center justify-center container mx-auto">
      <div>
        <img src={image} alt={treatment} />
        <h2>{treatment}</h2>
        <p>{description}</p>
        <p>Cost: ${cost}</p>
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="bg-blue-500 my-4 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Appointment
        </button>

        <Modal />
      </div>
    </div>
  );
};

export default Details;
