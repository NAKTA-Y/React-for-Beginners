import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye");
  }

  function hiFn() {
    console.log("hi");
    return byFn;
  }

  useEffect(hiFn, []);

  return <h1>Hello</h1>
}

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
    </div>
  )
}

export default App;