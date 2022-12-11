import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Home.css";
import Button from "@mui/material/Button";
const Common = (prop) => {
  return (
    <>
      <div className="home">
        <div className="information">
          <h1>{prop.forH1}</h1>
          <h1 className="company_name" style={{ color: "#7e7eff" }}>
            Jay Bansod
          </h1>
          <p style={{ margin: "10px 0" }}>
            We are team of talented developer making websites
          </p>
          <NavLink to={prop.visit} id="NavLink">
            <Button variant="contained" id="homebtn">
              {prop.butname}
            </Button>
          </NavLink>
        </div>
        <div className="rocketlogo">
          <img src={prop.imag} alt="Rocket immage" className="rocketimage" />
        </div>
      </div>
    </>
  );
};

export default Common;
