import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos, setTodos }) {
  return (
    <div>
      <div>
        {todos.map((todo) => {
          if (!todo.isComplete) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }
          return [];
        })}
      </div>
      <div>
        {todos.map((todo) => {
          if (todo.isComplete === true) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }
          return [];
        })}
      </div>
    </div>
  );
}
