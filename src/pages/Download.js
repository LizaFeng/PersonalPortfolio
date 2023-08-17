const Download = () => {
  const styled = {
    margin: "20%", // Corrected margin value with units
  };
  return (
    <div style={styled}>
      <a
        href="lizafeng.github.io/PersonalPortfolio/public/LizaResume.pdf"
        download="LizaResume.pdf"
      >
        <button className="btn btn-outline-primary btn-rounded">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Download;
