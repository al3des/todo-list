import React, { useContext } from "react"
import TodosContext from "../TodosContext"

import { Button } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { FaUndo } from "react-icons/fa"
import { MdDone } from "react-icons/md"

export default function TodoItem({ todo }) {
  let { setTodos } = useContext(TodosContext)

  function handleTodoComplete(id) {
    setTodos({ type: "COMPLETE", id })
  }

  function handleTodoDelete(id) {
    setTodos({ type: "DELETE", id })
  }
  let style = {
    textDecoration: todo.isCompleted ? "line-through" : "",
  }
  let completedTask = todo.isCompleted ? "bg-success text-white" : ""
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
          {!todo.isCompleted ? <MdDone /> : <FaUndo />}
        </Button>
      </div>
    </div>
  )
}
