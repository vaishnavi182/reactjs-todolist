
import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, todoVal, setTodoVal} =props
    // const [todoVal, setTodoVal] = useState('')
  return (
    <header>
        <input value={todoVal} onChange={(e)=>{setTodoVal(e.target.value)}} placeholder='Enter to do...'/>
        <button onClick={()=>{
            handleAddTodos(todoVal)
            setTodoVal("")
        }}>Add</button>
    </header>
  )
}
