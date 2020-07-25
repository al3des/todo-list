import React, { useContext } from "react"
import TodosContext from "../TodosContext"
import TodoItem from "./TodoItem"

export default function Todos() {
  let { todos, filter } = useContext(TodosContext)
  let displayTodos =
    filter === "SHOW_ALL"
      ? todos
      : filter === "SHOW_COMPLETE"
      ? todos.filter((todo) => todo.isCompleted)
      : filter === "SHOW_INCOMPLETE"
      ? todos.filter((todo) => !todo.isCompleted)
      : todos
  return (
    <div>
      <div>
        {displayTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
    </div>
  )
}
