import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalVisiblity() {
    setModalIsVisible(false);
  }

  function showModalVisibility() {
    setModalIsVisible(true);
  }

  return (
    <>
      <Header onCreatePost={showModalVisibility} />
      <main>
        <ToDoList
          onStopPosting={hideModalVisiblity}
          isPosting={modalIsVisible}
        />
      </main>
    </>
  );
}

export default App;
