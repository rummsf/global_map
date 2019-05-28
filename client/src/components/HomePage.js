import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <Link to={`/table`}>
          <h2 style={{ color: "lime" }}>TABLE</h2>
        </Link>
      </div>
      <div>
        <Link to={`/map`}>
          <h2 style={{ color: "magenta" }}>MAP</h2>
        </Link>
      </div>
      <div>
        <Link to={`/chart`}>
          <h2 style={{ color: "orange" }}>CHART</h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
