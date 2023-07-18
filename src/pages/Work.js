import { workExp } from "../data/workExp";
import WorkCarousel from "../components/navbar/workC";
import "../css/Work.css";

const Work = () => {
  return (
    <div>
      {workExp.map(function (exp, i) {
        return (
          <div key={i} className="card infoCard">
            <div className="card-body">
              <WorkCarousel
                key={exp.key}
                company={exp.company}
                title={exp.title}
                start={exp.startDate}
                end={exp.endDate}
                resp={exp.responsibilities}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
