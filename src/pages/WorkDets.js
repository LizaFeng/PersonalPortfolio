// BookDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { workExp } from "../data/workExp";
import "../css/InfoCard.css";

const WorkDetails = () => {
  const { startMY } = useParams();

  const work = workExp.find(
    (work) => work.startDate.replace(/\s+/g, "_") === startMY
  );

  if (!work) {
    return <div>experience not found</div>;
  }

  return (
    <div className="cardContainer">
      <h1>{work.company}</h1>
      <h3>{work.title}</h3>
      <h3>
        {work.startDate} - {work.endDate}
      </h3>
      <div className="cardDetails">
        <h4> Responsibilities</h4>
        <ul className="">
          {work.responsibilities.map(function (res, i) {
            return <li key={i}>{res}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkDetails;
