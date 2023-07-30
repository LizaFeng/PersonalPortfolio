// BookDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { workExp } from "../data/workExp";

const WorkDetails = () => {
  const { startMY } = useParams();

  const work = workExp.find(
    (work) => work.startDate.replace(/\s+/g, "_") == startMY
  );

  if (!work) {
    return <div>experience not found</div>;
  }

  return (
    <div>
      <h1>{work.company}</h1>
      <h2>{work.title}</h2>
      <h2>
        {work.startDate} - {work.endDate}
      </h2>
      <div id="workDetails">
        <h3> Responsibilities</h3>
        <ul>
          {work.responsibilities.map(function (res, i) {
            return <li key={res.key}>{res}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkDetails;
