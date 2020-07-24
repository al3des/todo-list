import React, { useState } from "react";
import "./styles.css";

import useReducerTodos from "./useReducerTodos";
import useFilterTodos from "./useFilterTodos";

export default function App() {
  let [task, setTask] = useState("");
  let [filter, setFilter] = useState("ALL");
  let [todos, dispatch] = useReducerTodos();
  let [filterTodos, dispatchFilter] = useFilterTodos();

  function handleAddTask(task) {
    dispatch({ type: "ADD", task });
    setTask("");
  }
  function handleCompleteTodo(id) {
    dispatch({ type: "COMPLETE", id });
  }
  function handleDeleteTodo(id) {
    dispatch({ type: "DELETE", id });
  }
  function handleFilter(filter) {
    setFilter(filter);
    dispatchFilter({ type: filter, todos });
  }

  let displayTodos = filter === "ALL" ? todos : filterTodos;
  console.log(displayTodos);
  return (
    <div className="App">
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={() => handleAddTask(task)}>add</button>
      <div>
        <button onClick={() => handleFilter("ALL")}>show all</button>
        <button onClick={() => handleFilter("COMPLETE")}>show complete</button>
        <button onClick={() => handleFilter("INCOMPLETE")}>
          show incomplete
        </button>
      </div>
      <h1>Todos</h1>
      {displayTodos.map(todo => (
        <li key={todo.id}>
          {todo.task}
          <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
          <button onClick={() => handleCompleteTodo(todo.id)}>complete</button>
        </li>
      ))}
    </div>
  );
}
