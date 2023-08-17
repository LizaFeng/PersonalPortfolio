// BookDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import projectList from "../data/projectList";

const ProjDetails = () => {
  const { startMY } = useParams();

  const project = projectList.find(
    (project) => project.startDate.replace(/\s+/g, "_") === startMY
  );

  if (!project) {
    return <div>Problem fetching the specified project.</div>;
  }

  return (
    <div className="cardContainer">
      <h1>{project.name}</h1>
      <h3>
        {project.solo ? (
          <p>Solo Project</p>
        ) : (
          <p>Team Project with {project.teamSize} members</p>
        )}
      </h3>

      <h4>
        {project.startDate} - {project.endDate}
      </h4>
      <a href={project.results[1]} target="_blank">
        Click here to see project
      </a>
      <div className="cardDetails">
        <div>
          <h4>Technologies</h4>
          <ul>
            {project.technologies.map(function (tech, i) {
              return <li key={i}>{tech}</li>;
            })}
          </ul>
        </div>
        <div>
          <h4>Problem Statement</h4>
          <p>{project.problem}</p>
          <br />
          <h4>Results</h4>
          <ul>
            {project.results[0].map(function (res, j) {
              return <li key={j}>{res}</li>;
            })}
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProjDetails;
