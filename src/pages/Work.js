import { workExp } from "../data/workExp";
import "../css/InfoCard.css";
import Card from "react-bootstrap/Card";

const Work = () => {
  return (
    <div className="workContainer card-deck">
      {workExp.map(function (exp, i) {
        return (
          <a
            className="workCard"
            href="https://stackoverflow.com/questions/70068954/make-entire-card-clickable-by-targeting-a-inside-of-it"
          >
            <Card className="mb-4 " style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h1>{exp.company}</h1>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <h5>{exp.title}</h5>
                </Card.Subtitle>
                <Card.Text className="text-muted">
                  <h6>
                    {exp.startDate} - {exp.endDate}
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

export default Work;
