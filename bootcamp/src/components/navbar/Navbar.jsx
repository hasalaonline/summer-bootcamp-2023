import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">John Doe</div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="home">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li className="nav-link">
            <Link to="technologies">Technologies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
