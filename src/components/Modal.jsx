import React from "react";

const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = e.target.Fname.value;
    const lname = e.target.Lname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const address = e.target.address.value;

    console.log("First Name:", fname);
    console.log("Last Name:", lname);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Appointment Date:", date);
    console.log("Address:", address);
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="Fname" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="input input-bordered input-primary w-full"
              name="Fname"
              minLength="2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Lname" className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="input input-bordered input-primary w-full"
              name="Lname"
              minLength="2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered input-primary w-full"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="input input-bordered input-primary w-full"
              name="phone"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Appointment Date
            </label>
            <input
              type="date"
              className="input input-bordered input-primary w-full"
              name="date"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter your address"
              className="input input-bordered input-primary w-full"
              name="address"
              required
            />
          </div>
          <button className="btn btn-primary mt-4" type="submit">
            Make Appointment
          </button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
