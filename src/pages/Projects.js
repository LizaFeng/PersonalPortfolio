import projectList from "../data/projectList";
import "../css/InfoCard.css";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <div className="cardContainer card-deck" style={{ textAlign: "center" }}>
      {projectList.map(function (proj, i) {
        return (
          <a
            className="InfoCard"
            href="https://stackoverflow.com/questions/70068954/make-entire-card-clickable-by-targeting-a-inside-of-it"
          >
            <Card className="mb-4 " style={{ width: "20rem", height: "15rem" }}>
              <Card.Body>
                <Card.Title>
                  <h1>{proj.projectName}</h1>
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
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
