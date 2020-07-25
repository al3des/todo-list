import { useReducer } from "react"
import { v4 as uuid } from "uuid"

export default function useReducerTodos() {
  let [todos, dispatch] = useReducer((todos, action) => {
    switch (action.type) {
      case "ADD":
        return todos.concat({
          task: action.task,
          id: uuid(),
          isCompleted: false,
        })
      case "COMPLETE":
        return todos.map((todo) => {
          return todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        })
      case "DELETE":
        return todos.filter((todo) => todo.id !== action.id)
      default:
        return todos
    }
  }, [])
  return [todos, dispatch]
}
