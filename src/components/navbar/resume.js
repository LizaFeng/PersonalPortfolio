import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";

function Resume() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <li className={`nav-item dropdown ${expanded ? "show" : ""}`}>
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
        <Link className="dropdown-item resCategory link" to="Projects">
          Projects
        </Link>
        <Link className="dropdown-item resCategory link" to="Work-Experience">
          Work/Experience
        </Link>
        <Link className="dropdown-item resCategory link" to="Download">
          Download
        </Link>
      </div>
    </li>
  );
}

export default Resume;
