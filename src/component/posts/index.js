import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsDetail, setPostsDetail] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  async function getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = async () => {
    //  axios
    //     .get("https://jsonplaceholder.typicode.com/posts/1")
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    setPostsDetail(response.data);
    console.log(response.data);
  };

  const handleAdd = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <button onClick={handleClick}>Detail</button>
      <button onClick={handleAdd}>Add</button>
      <button onClick={getPosts}>Get post</button>
      <h1>{postsDetail?.title}</h1>
      {/* {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Posts;
