import React from "react";
import classes from "./Card.module.css";
// recommend use module.css

// props
const Card = ({ data }) => {
  return (
    <div className={classes.container}>
      <img src={data.avatar_url} alt="avatar" width="50px" height={"50px"} />
      <a href={data.url}>{data.name}</a>
    </div>
  );
};

export default Card;
