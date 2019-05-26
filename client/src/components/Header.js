import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <>
      <Link to={`/`}>
        <h1>DEVDATA</h1>
      </Link>
    </>
  );
};

export default Header;
