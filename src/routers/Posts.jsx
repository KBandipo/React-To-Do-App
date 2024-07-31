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
