import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const generateRndInt = () => {
    return Math.floor(Math.random() * (100 - 1) + 1);
  };

  return (
    <div>
      Home
      <Link to={`/post/${generateRndInt()}`}>Go to post</Link>
    </div>
  );
};

export default Home;
