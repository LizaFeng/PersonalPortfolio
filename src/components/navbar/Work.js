import { workExp } from "../../data/workExp";
import "../../css/InfoCard.css";
import "../../css/NavBar.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="cardContainer card-deck">
      <div className="row">
        {workExp.map(function (exp, i) {
          return (
            <Link
              className="InfoCard link"
              to={`/Work-Experience/${exp.company.replace(
                /\s+/g,
                "_"
              )}/${exp.startDate.replace(/\s+/g, "_")}`}
              key={exp.key}
            >
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Card
                  className="mb-4 shadow-sm card"
                  style={{ width: "18rem" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h1>{exp.company}</h1>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted cardText">
                      <h5>{exp.title}</h5>
                    </Card.Subtitle>
                    <Card.Text className="text-muted cardText">
                      <h6>
                        {exp.startDate} - {exp.endDate}
                      </h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
