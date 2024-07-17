import classes from "./PostToDo.module.css";

function PostToDo({ day, task }) {
  return (
    <li className={classes.post}>
      <p className={classes.day}>{day}</p>
      <p className={classes.task}>{task}</p>
    </li>
  );
}

export default PostToDo;
