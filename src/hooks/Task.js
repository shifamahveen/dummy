import React from 'react'

const Task = ({ todo, addTodo }) => {
    console.log("Child render");
    
  return (
    <div>
        <h3>Task List</h3>
        {todo.map((t, index) => (
            <li key={index}>{t}</li>
        ))}

        <button onClick={addTodo}>Add Task</button>
    </div>
  )
}

export default React.memo(Task)