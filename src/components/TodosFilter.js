import React, { useContext } from "react"
import TodosContext from "../TodosContext"

import { Button } from "react-bootstrap"

export default function TodosFilter() {
  let { setFilter } = useContext(TodosContext)
  function handleFilter(filter) {
    setFilter(filter)
  }
  return (
    <div className="d-flex justify-content-between mb-2">
      <Button size="sm" onClick={() => handleFilter("SHOW_ALL")}>
        show all
      </Button>
      <Button size="sm" onClick={() => handleFilter("SHOW_COMPLETE")}>
        show complete
      </Button>
      <Button size="sm" onClick={() => handleFilter("SHOW_INCOMPLETE")}>
        show incomplete
      </Button>
    </div>
  )
}
