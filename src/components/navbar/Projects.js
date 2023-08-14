import projectList from "../../data/projectList";
import "../../css/InfoCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";

const Projects = () => {
  return (
    <div className="cardContainer card-deck">
      <div className="row">
        {projectList.map(function (proj, i) {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Link
                className="InfoCard link"
                to={`/Projects/${proj.name.replace(
                  /\s+/g,
                  "_"
                )}/${proj.startDate.replace(/\s+/g, "_")}`}
                key={proj.key}
              >
                <Card
                  className="mb-4 shadow-sm"
                  style={{ width: "20rem", height: "15rem" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h1>{proj.name}</h1>
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted cardText">
                      {proj.solo ? <p>Solo Project</p> : <p>Team Project</p>}
                    </Card.Subtitle>
                    <Card.Text className="text-muted cardText">
                      <h6>
                        {proj.startDate} - {proj.endDate}
                      </h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
