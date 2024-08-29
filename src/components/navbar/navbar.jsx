import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-left">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-button">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="navbar-right-button">
            <Link to={"/courses"}>Courses</Link>
          </div>
          <div className="navbar-right-button">
            <Link to={"/dashboard"}>Enrolled</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
