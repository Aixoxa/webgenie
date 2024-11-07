import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="nav_container">
        <ul>
          <li>
            <img src="./images/webgenie-logo.png" alt="" />
          </li>

          <Link
            to="/playground"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li>Use playground</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
