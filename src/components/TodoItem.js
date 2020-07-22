import React from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUndo } from "react-icons/fa";
import { MdDone } from "react-icons/md";

export default function TodoItem({ todo, todos, setTodos }) {
  let style = {
    textDecoration: todo.isComplete ? "line-through" : "",
  };

  function handleTodoComplete(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleTodoDelete(id) {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  let completedTask = todo.isComplete ? "bg-success text-white" : "";

  return (
    <div
      className={`d-flex align-items-center justify-content-between mb-2 p-2 ${completedTask}`}
      style={style}
    >
      <span>{todo.task}</span>
      <div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => handleTodoDelete(todo.id)}
        >
          <BsFillTrashFill />
        </Button>

        <Button
          size="sm"
          className="ml-2"
          onClick={() => handleTodoComplete(todo.id)}
        >
          {!todo.isComplete ? <MdDone /> : <FaUndo />}
        </Button>
      </div>
    </div>
  );
}
