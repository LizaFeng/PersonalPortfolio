import projectList from "../data/projectList";
import "../css/InfoCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="cardContainer card-deck" style={{ textAlign: "center" }}>
      {projectList.map(function (proj, i) {
        return (
          <Link
            className="InfoCard"
            to={`/Projects/${proj.name.replace(
              /\s+/g,
              "_"
            )}/${proj.startDate.replace(/\s+/g, "_")}`}
            key={proj.key}
          >
            <Card className="mb-4 " style={{ width: "20rem", height: "15rem" }}>
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
        );
      })}
    </div>
  );
};

export default Projects;
