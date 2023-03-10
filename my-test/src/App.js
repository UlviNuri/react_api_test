import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://west.planetgeo.az/api/blogs").then((res)=>setPosts(res.data.data))
      // setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  // change page 
  const paginate =(pagenumber)=> setCurrentPage(pagenumber)
  return (
    <div className="container mt-5">
      <h1>My Blog</h1>

      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}  />
    </div>
  );
}

export default App;
