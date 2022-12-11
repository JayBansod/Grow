import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../Css/Navbar.css";
const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" id="NavLink">
            <p>JayBansod</p>
          </NavLink>
        </div>
        <div className={showIcon ? "nav_links active" : "nav_links"}>
          <ul className="ul">
            <li className="li">
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className="nevigation"
              >
                Home
              </NavLink>
            </li>

            <li className="li">
              <NavLink
                className="nevigation"
                to="/about"
                style={{ textDecoration: "none" }}
              >
                About
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                className="nevigation"
                to="/services"
                style={{ textDecoration: "none" }}
              >
                Services
              </NavLink>
            </li>
            <li className="li">
              <NavLink
                className="nevigation"
                to="/contact"
                style={{ textDecoration: "none" }}
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
                onClick={() => {
                  setShowIcon(!showIcon);
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
