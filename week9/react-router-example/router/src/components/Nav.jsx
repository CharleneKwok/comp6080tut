import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <span> | </span>
      <Link to={"/about"}>About</Link>
      <span> | </span>
      <Link to={"/topics"}>Topics</Link>
    </div>
  );
};

export default Nav;
