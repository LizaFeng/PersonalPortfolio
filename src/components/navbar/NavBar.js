import Resume from "./resume";
import "../../css/NavBar.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Projects from "./Projects";
import Work from "./Work";
import Download from "../../pages/Download";
import WorkDetails from "../../pages/WorkDets";
import ProjDetails from "../../pages/ProjDets";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <Link className="navbar-brand link" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span>_</span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Resume />

            <li className="nav-item">
              <Link className="nav-link link" to="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:name/:startMY" element={<ProjDetails />} />
        <Route path="/Work-Experience" element={<Work />} />
        <Route
          path="/Work-Experience/:name/:startMY"
          element={<WorkDetails />}
        />
        <Route path="/Download" element={<Download />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default NavBar;
