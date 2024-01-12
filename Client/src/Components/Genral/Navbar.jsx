import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/problems/all">Problems</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
        </nav>
      </div>
    </>
  );
}
