import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  // console.log(params);
  return (
    <div>
      Post
      <h4>Id: {params.id}</h4>
    </div>
  );
};

export default Post;
