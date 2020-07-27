import React, { useState } from "react"
import useReducerTodos from "./hooks/useReducerTodos"
import TodosContext from "./TodosContext"

import { Container } from "react-bootstrap"
import Todos from "./components/Todos"
import TodoForm from "./components/TodoForm"
import TodosFilter from "./components/TodosFilter"
import TodosProgress from "./components/TodosProgress"

function App() {
  let [todos, setTodos] = useReducerTodos()
  let [filter, setFilter] = useState("ALL")
  return (
    <TodosContext.Provider value={{ todos, setTodos, filter, setFilter }}>
      <Container className="App">
        <h1>Todo List</h1>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodosProgress />
        <TodosFilter />
        <Todos />
      </Container>
    </TodosContext.Provider>
  )
}

export default App
