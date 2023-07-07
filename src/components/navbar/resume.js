import "../../css/NavBar.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import Work from "../../pages/Work";

function Resume() {
  return (
    <div>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="resumeDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Resume
        </a>
        <div
          className="dropdown-menu justify-content-center"
          aria-labelledby="resumeDropdown"
        >
          <Link className="dropdown-item resCategory" to="Projects">
            Projects
          </Link>

          <Link className="dropdown-item resCategory" to="Work-Experience">
            Work/Experience
          </Link>
          <Link className="dropdown-item resCategory" to="Download">
            Download
          </Link>
        </div>
      </li>
    </div>
  );
}

export default Resume;
