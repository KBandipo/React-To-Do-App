import { useState } from "react";
import classes from "./NewToDo.module.css";

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
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewToDo;
