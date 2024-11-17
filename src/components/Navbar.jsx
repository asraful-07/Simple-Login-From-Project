import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, handelLogout } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      <div className="min-h-20 bg-blue-950 flex text-white justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold ml-4">TEETH WIZARD</h1>
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline ml-4" : "ml-4")}
          >
            Home
          </NavLink>
          <NavLink
            to="/allTreatments"
            className={({ isActive }) => (isActive ? "underline ml-4" : "ml-4")}
          >
            All Treatments
          </NavLink>
          <NavLink
            to="/myAppoinments"
            className={({ isActive }) => (isActive ? "underline ml-4" : "ml-4")}
          >
            My Appointments
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "underline ml-4" : "ml-4")}
          >
            Profile
          </NavLink>
        </div>
        <div>
          {user ? (
            // If user is logged in, show the logout button
            <button className="btn btn-danger mr-4" onClick={handelLogout}>
              Logout
            </button>
          ) : (
            // If user is logged out, show the login button
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "underline mr-4" : "mr-4"
              }
            >
              <button className="btn btn-primary">Login</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
