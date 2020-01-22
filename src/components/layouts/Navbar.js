import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        Navbar
      </a>
      <ul className="navbar-nav d-flex flex-sm-row">
        <li className="nav-item mr-5">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item mr-5">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
