import React, { useContext } from "react"
import useTodosFilter from "../hooks/useTodosFilter"

import TodoItem from "./TodoItem"

export default function Todos() {
  let displayTodos = useTodosFilter()
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
