import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./Header.module.css";

function Header({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        To-Do App
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          Post New Task
        </button>
      </p>
    </header>
  );
}

export default Header;
