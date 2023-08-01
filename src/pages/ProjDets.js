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
    <div>
      <h1>{project.name}</h1>
      <h3>
        {project.solo ? (
          <p>Solo Project</p>
        ) : (
          <p>Team Project with {project.teamSize} members</p>
        )}
      </h3>

      <h3>
        {project.startDate} - {project.endDate}
      </h3>
      <div>
        <h4>Technologies</h4>
        <ul>
          {project.technologies.map(function (tech, i) {
            return <li key={project.key}>{tech}</li>;
          })}
        </ul>
      </div>
      <div id="projDetails">
        <h4>Problem Statement</h4>
        <p>{project.problem}</p>
        <br />
        <h4>Approach</h4>
        <p>{project.results[0]}</p>
        <br />
        <h4>Results</h4>
        <ul>
          {project.results.map(function (res, i) {
            return <li key={project.key}>{res}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjDetails;
