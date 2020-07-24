import { useReducer } from "react";

export default function useFilterTodos() {
  let [todos, dispatch] = useReducer((todos, action) => {
    switch (action.type) {
      case "COMPLETE":
        return action.todos.filter(todo => !todo.isCompleted);
      case "INCOMPLETE":
        return action.todos.filter(todo => todo.isCompleted);
      default:
        return todos;
    }
  }, "ALL");
  return [todos, dispatch];
}
