import React from "react";
import Rocket from "../image/bac.png";
import { NavLink } from "react-router-dom";
import "../Css/Home.css";
import Button from "@mui/material/Button";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="information">
          <h1>Grow Your business with</h1>
          <h1 className="company_name" style={{ color: "#7e7eff" }}>
            Jay Bansod
          </h1>
          <p style={{ margin: "10px 0" }}>
            We are team of talented developer making websites
          </p>
          <NavLink to="./about" id="NavLink">
            <Button variant="contained" id="homebtn">
              Get Started
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

export default Home;
