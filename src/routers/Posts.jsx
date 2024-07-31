import { Outlet } from "react-router-dom";
import ToDoList from "../components/ToDoList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <ToDoList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:6060/posts");
  const resData = await response.json();
  return resData.posts;
}
