import React from "react";
import { useNavigate } from "react-router-dom";

const Topics = () => {
  const navigate = useNavigate();
  return (
    <div>
      Topics
      <h4 onClick={() => navigate("/")}>Go to Home</h4>
    </div>
  );
};

export default Topics;
