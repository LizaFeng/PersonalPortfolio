import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";

function Resume() {
  return (
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
      <div className="dropdown-menu" aria-labelledby="resumeDropdown">
        <a className="dropdown-item" href="#">
          Projects
        </a>
        <a className="dropdown-item" href="#">
          Work
        </a>
        <a className="dropdown-item" href="#">
          Download
        </a>
      </div>
    </li>
  );
}

export default Resume;
