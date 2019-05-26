import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <Link to={`/table`}>
          <h1>TABLE</h1>
        </Link>
      </div>
      <div>
        <Link to={`/map`}>
          <h1>MAP</h1>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
