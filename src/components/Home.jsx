import React from "react";
import Banner from "./Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import FeedBack from "./FeedBack";

const Home = () => {
  const services = useLoaderData();
  const { serviceData, happyclientsData } = services;

  return (
    <div className="container mx-auto">
      <Banner />
      <div className="grid mt-24 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {serviceData.slice(0, 4).map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
      <button className="mx-auto block btn btn-primary mt-4">
        <NavLink to="/allTreatments">Show more</NavLink>
      </button>

      <FeedBack feedBackData={happyclientsData} />
    </div>
  );
};

export default Home;
