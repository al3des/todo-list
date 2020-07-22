import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

export default function TodoForm({ todos, setTodos }) {
  let [task, setTask] = useState("");

  function handleSetTask(e) {
    if (task) {
      setTodos(todos.concat({ id: uuid(), task, isComplete: false }));
    }
    setTask("");
  }

  return (
    <InputGroup className="mb-3">
      <FormControl
        value={task}
        placeholder="Add new todo"
        aria-label="Add new todo"
        aria-describedby="basic-addon2"
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSetTask(task);
          }
        }}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={(e) => handleSetTask(task)}
        >
          Add
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
