import React from "react";
import "./style/Navbar.css";
import Search from "./Search.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="logo-navbar">
            <Link to="/">
              ADP<span>.</span>
            </Link>
          </div>
          <div className="navbar-link">
            <span className="item-navbar">Movies</span>
            <span className="item-navbar">My List</span>
          </div>
          <Search />
        </div>
        <div className="right">
          <Link to="Login">Login</Link>
          <div className="profile">
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
