import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/problems/all">Problems</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
