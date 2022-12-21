import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading... </h2>;
  }
  return (
    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-item">
            <p>{post.name}</p>
          <img src={post.image}/>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
