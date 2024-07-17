import { useState } from "react";
import classes from "./NewToDo.module.css";

function NewToDo({ onClose }) {
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
    console.log(postData);
    onClose();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={taskToDoHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={taskDayHandler} />
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
