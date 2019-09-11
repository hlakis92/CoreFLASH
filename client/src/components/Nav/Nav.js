/* Nav Bar being rendered on the page here*/
import React from "react";
import "./Nav.css";


const Nav = () =>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color:"white"}}>
          CoreFLASH
        </a>
      <div>
        <span className="nav-Links">
          <a href="/" className="navbar-brand" style={{color:"white"}}>
            Home
          </a>
          <a href="/" className="navbar-brand" style={{color:"white"}}>
            About
          </a>
          <a href="/" className="navbar-brand" style={{color:"white"}}>
            Projects
          </a>
          <a href="/login" className="navbar-brand" style={{color:"white"}}>
            Login
          </a>
          <a href="/signup" className="navbar-brand" style={{color:"white"}}>
            Signup
          </a>
        </span>
      </div>
    </div>
  </nav>;

export default Nav;