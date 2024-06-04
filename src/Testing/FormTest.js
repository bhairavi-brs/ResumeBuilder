import React, { useState } from "react";
import mainPicture from '../assets/mainPicture.jpg'
import { useNavigate } from "react-router-dom";
import "./FormTest.css";

export const FormTest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    profileSummary: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    navigate("/details", {
      state: {
        formData : formData
      },
    });
  };

  return (
    <div className="mainContainer">
      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${mainPicture})` }}
      ></div>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="formHeading">
            <h2 style={{ color: "#125832", margin: "0px" }}>Registration</h2>
            <p style={{ color: "#9f9f99", margin: "0px" }}>
              Fill the form to be the part of the team
            </p>
          </div>

          <div className="formGroupHalf">
            <div className="formGroup" style={{ width: "48%" }}>
              <label className="label" htmlFor="firstName">
                First Name:*
              </label>
              <input
                className="input"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name here"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup" style={{ width: "48%" }}>
              <label className="label" htmlFor="lastName">
                Last Name:*
              </label>
              <input
                className="input"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name here"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="formGroup">
            <label className="label" htmlFor="email">
              Email:*
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address here "
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label className="label" htmlFor="designation">
              Designation:*
            </label>
            <input
              className="input"
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter your designation here"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formGroup">
            <label className="label" htmlFor="profileSummary">
              Profile Summary:*
            </label>
            <textarea
              className="input"
              id="profileSummary"
              name="profileSummary"
              rows="4"
              value={formData.profileSummary}
              onChange={handleChange}
              required
            ></textarea> 
          </div>

          <div className="formButtons">
            <button className="submitButton" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
