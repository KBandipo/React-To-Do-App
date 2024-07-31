import classes from "./NewToDo.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewToDo() {

  return (
    <Modal>
      <form className={classes.form}>
        <p>
          <label htmlFor="day">Day</label>
          <input type="text" id="day" required/>
        </p>
        <p>
          <label htmlFor="task">Task</label>
          <textarea id="task" required rows={3}/>
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
