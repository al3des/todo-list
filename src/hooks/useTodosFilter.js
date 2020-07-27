import { useContext } from "react"
import TodosContext from "../TodosContext"

export default function useTodosFilter() {
  let { todos, filter } = useContext(TodosContext)

  let completedTodos = todos.filter((todo) => todo.isCompleted)
  let incompletedTodos = todos.filter((todo) => !todo.isCompleted)
  let allTodos = incompletedTodos.concat(completedTodos)
  return filter === "SHOW_ALL"
    ? allTodos
    : filter === "SHOW_COMPLETE"
    ? completedTodos
    : filter === "SHOW_INCOMPLETE"
    ? incompletedTodos
    : allTodos
}
