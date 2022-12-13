import React from "react";
import Rocket from "../image/1.png";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "../Css/Home.css";
import Contact from "./Contact";

const About = () => {
  return (
    <>
      <div className="home">
        <div className="information">
          <h1>Welcome to about Page</h1>
          <h1 className="company_name" style={{ color: "#7e7eff" }}>
            Jay Bansod
          </h1>
          <p style={{ margin: "10px 0" }}>
            We are team of talented developer making websites
          </p>
          <NavLink to="./contact" id="NavLink" element={<Contact />}>
            <Button variant="contained" id="homebtn">
              Contact Us
            </Button>
          </NavLink>
        </div>
        <div className="rocketlogo">
          <img src={Rocket} alt="Rocket immage" className="rocketimage" />
        </div>
      </div>
    </>
  );
};

export default About;
