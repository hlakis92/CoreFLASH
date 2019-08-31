/* Nav Bar being rendered on the page here*/
import React from "react";
import "./Nav.css";


const Nav = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
          CoreFLASH
        </a>
      <div>
        <span className="nav-Links">
          <a href="/" className="navbar-brand">
            Home
          </a>
          <a href="/" className="navbar-brand">
            About
          </a>
          <a href="/" className="navbar-brand">
            Projects
          </a>
          <a href="/login" className="navbar-brand">
            Login
          </a>
          <a href="/signup" className="navbar-brand">
            Signup
          </a>
        </span>
      </div>
    </div>
  </nav>;

export default Nav;