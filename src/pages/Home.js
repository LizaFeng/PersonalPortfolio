import projectList from "../data/projectList";
import "../css/Home.css";

const Home = () => {
  const currentProject = () => {
    for (const proj of projectList) {
      if (proj.endDate.trim() === "Present") {
        return <a href={proj.results[1][0]}>{proj.name}</a>;
      }
    }
    return null; // Return null if no ongoing project is found
  };

  const phraseChange = () => {
    const projectNameLink = currentProject();
    if (projectNameLink) {
      return (
        <>
          My current focus is enhancing the user experience for the ongoing
          project: {projectNameLink}.
        </>
      );
    }
    return "";
  };

  return (
    <div className="about-me">
      <div className="intro">
        <h2>Hello! Liza here, sharing my portfolio site.</h2>
      </div>
      <p>
        I'm a recent <a href="https://hunter.cuny.edu/">Hunter College</a>
        graduate on a mission to excel as a front-end software engineer based in
        New York. I'm passionate about crafting user-friendly applications and
        currently contribute my skills as a web developer at Hunter College's
        Chinese Language Department. {phraseChange()} I welcome opportunities
        for collaboration, networking, and discussions related to front-end
        development and innovative web solutions. Let's connect and explore ways
        we can create impactful digital experiences together.
      </p>
    </div>
  );
};

export default Home;
