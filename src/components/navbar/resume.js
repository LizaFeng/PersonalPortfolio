import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";

function Resume() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <li
      className={`nav-item dropdown ${expanded ? "show" : "hide"}`}
      onMouseLeave={closeMenu}
    >
      <a
        className="nav-link dropdown-toggle link"
        href="#"
        id="resumeDropdown"
        role="button"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={expanded}
      >
        Resume
      </a>
      <div
        className={`dropdown-menu customDrop ${expanded ? "show" : ""}`}
        aria-labelledby="resumeDropdown"
      >
        <Link
          className="dropdown-item resCategory link"
          to="Projects"
          onClick={closeMenu} // Close the menu when a menu item is clicked
        >
          Projects
        </Link>
        <Link
          className="dropdown-item resCategory link"
          to="Work-Experience"
          onClick={closeMenu} // Close the menu when a menu item is clicked
        >
          Work/Experience
        </Link>
        <Link
          className="dropdown-item resCategory link"
          to="Download"
          onClick={closeMenu} // Close the menu when a menu item is clicked
        >
          Download
        </Link>
      </div>
    </li>
  );
}

export default Resume;
