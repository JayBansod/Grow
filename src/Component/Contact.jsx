import React from "react";
import "../Css/Contact.css";
import aboutImg from "../image/about.png";
const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="main_card">
          <div className="inputs_div">
            <input
              className="input"
              type="text"
              placeholder="Enter your Name"
              autoComplete="off"
            />
            <input
              className="input"
              type="text"
              placeholder="Enter your Email"
              autoComplete="off"
            />
            <input
              className="input"
              type="text"
              placeholder="Enter your Mobile Number"
              autoComplete="off"
            />
            <input className="input" type="text" placeholder="Type Here" />
          </div>
          <div className="image">
            <img src={aboutImg} alt="About_Image" id="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
