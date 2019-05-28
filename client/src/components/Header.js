import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <>
      <h1>
        <Link to={`/`}>DEVDATA</Link>
      </h1>
      <hr />
      <h3>// HACKER RANK SURVEY 2018</h3>
    </>
  );
};

export default Header;
