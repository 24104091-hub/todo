
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  // Complete task
  const completeTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Delete task
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none" }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "10px" }}>
            <span
              onClick={() => completeTask(index)}
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
