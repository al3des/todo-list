import React, { useState, useContext } from "react"
import TodosContext from "../TodosContext"

import { InputGroup, FormControl, Button } from "react-bootstrap"

export default function TodoForm() {
  let [task, setTask] = useState("")
  let { setTodos } = useContext(TodosContext)

  function handleSetTask(e) {
    if (task) {
      setTodos({ type: "ADD", task })
    }
    setTask("")
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
            handleSetTask(task)
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
  )
}
