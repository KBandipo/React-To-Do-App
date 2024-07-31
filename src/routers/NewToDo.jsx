import classes from "./NewToDo.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

function NewToDo() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="day">Day</label>
          <input type="text" id="day" name="day" required />
        </p>
        <p>
          <label htmlFor="task">Task</label>
          <textarea id="task" name="task" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewToDo;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:6060/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  });
  return redirect("/");
}
