// import React, { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../Css/Navbar.css";
const Navbar = () => {
  // const [showIcon, setShowIcon] = useState(false);

  // const sidebar = document.getElementById("hideShow");

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" id="NavLink">
            <p>JayBansod</p>
          </NavLink>
        </div>
        <div
          // className={showIcon ? "nav_links active" : "nav_links"}
          className="nav_links"
          id="hideShow"
        >
          <ul className="ul">
            <li className="li">
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="nevigation"
                onClick={() => {
                  const sidebar = document.getElementById("hideShow");
                  sidebar.classList.toggle("active");
                }}
              >
                Home
              </NavLink>
            </li>

            <li className="li">
              <NavLink
                className="nevigation"
                to="/about"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  const sidebar = document.getElementById("hideShow");
                  sidebar.classList.toggle("active");
                }}
              >
                About
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                className="nevigation"
                to="/services"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  const sidebar = document.getElementById("hideShow");
                  sidebar.classList.toggle("active");
                }}
              >
                Services
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                className="nevigation"
                to="/contact"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  const sidebar = document.getElementById("hideShow");
                  sidebar.classList.toggle("active");
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://mui.com/material-ui/material-icons/?query=insta"
                target="#"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://mui.com/material-ui/material-icons/?query=insta"
                target="#"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://mui.com/material-ui/material-icons/?query=insta"
                target="#"
              >
                <InstagramIcon />
              </a>
            </li>
            <li id="menu">
              <span
                id="menu"
                onClick={() => {
                  // setShowIcon(!showIcon);
                  const sidebar = document.getElementById("hideShow");
                  sidebar.classList.toggle("active");
                }}
              >
                <MenuIcon />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
