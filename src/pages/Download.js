const Download = () => {
  const styled = {
    margin: "20%", // Corrected margin value with units
  };
  return (
    <div style={styled}>
      <a href="/LizaResume.pdf" download>
        <button className="btn btn-outline-primary btn-rounded">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Download;
