import { useState } from "react";
import classes from "./NewToDo.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewToDo({ onClose, onAddPost }) {
  const [taskToDo, setTaskToDo] = useState("");
  const [taskDay, setTaskDay] = useState("");

  function taskToDoHandler(event) {
    setTaskToDo(event.target.value);
  }

  function taskDayHandler(event) {
    setTaskDay(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = { day: taskDay, task: taskToDo };
    onAddPost(postData);
    onClose();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="day">Day</label>
          <input type="text" id="day" required onChange={taskDayHandler} />
        </p>
        <p>
          <label htmlFor="task">Task</label>
          <textarea id="task" required rows={3} onChange={taskToDoHandler} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewToDo;
