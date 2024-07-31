import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        To-Do App
      </h1>
      <p>
        <Link to="/create-todo" className={classes.button}>
          <MdPostAdd size={18} />
          Post New Task
        </Link>
      </p>
    </header>
  );
}

export default Header;
