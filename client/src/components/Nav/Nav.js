import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <a className="nav-item text-white btn" href="/saved">
        Saved Books
      </a>
      <a className="nav-item text-white btn" href="/">
        New Search
      </a>
    </nav>
  );
}

export default Nav;
