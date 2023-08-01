import Resume from "./resume";
import "../../css/NavBar.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Projects from "../../pages/Projects";
import Work from "../../pages/Work";
import Download from "../../pages/Download";
import NotFound from "../../pages/NotFound";
import WorkDetails from "../../pages/WorkDets";
import ProjDetails from "../../pages/ProjDets";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Resume />
            <li className="nav-item">
              <Link className="nav-link" to="Contact">
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default NavBar;
