import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
  let [todos, setTodos] = useState([]);

  return (
    <Container className="App">
      <h1>Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </Container>
  );
}

export default App;
