import { useLoaderData } from "react-router-dom";

import classes from "./ToDoList.module.css";
import PostToDo from "./PostToDo";

function ToDoList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch("http://localhost:6060/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-Type": "application/json",
      },
    });
    setPosts((existingPost) => [postData, ...existingPost]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <PostToDo key={post.day} day={post.day} task={post.task} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h2>There are no Tasks yet</h2>
          <p>Post a New Task!</p>
        </div>
      )}
    </>
  );
}

export default ToDoList;
