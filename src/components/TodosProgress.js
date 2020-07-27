import React, { useContext } from "react"
import TodosContext from "../TodosContext"

import { ProgressBar } from "react-bootstrap"

export default function TodosProgress() {
  let { todos } = useContext(TodosContext)
  let completed = todos.filter((todo) => todo.isCompleted)

  const now = completed.length
    ? Math.floor((100 * completed.length) / todos.length)
    : 0
  return (
    <div className="my-4">
      <h5>Completetion Progress</h5>
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  )
}
