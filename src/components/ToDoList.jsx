import { useEffect, useState } from "react";
import classes from "./ToDoList.module.css";
import PostToDo from "./PostToDo";
import NewToDo from "./NewToDo";
import Modal from "./Modal";

function ToDoList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewToDo onClose={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <PostToDo key={post.day} day={post.day} task={post.task} />
          ))}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h2>There are no Tasks yet</h2>
          <p>Post a New Task!</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading To-do tasks...</p>
        </div>
      )}
    </>
  );
}

export default ToDoList;
