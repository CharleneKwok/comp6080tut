import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  const queries = new URLSearchParams(location.search);

  return (
    <div>
      About
      <h4>User: {queries.get("user")}</h4>
      <h4>Id: {queries.get("id")}</h4>
    </div>
  );
};

export default About;
