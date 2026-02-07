import { useState } from 'react'
import './App.css'

function App() {

  const [showForm, setShowForm] = useState(false)
  const [message, setMessage] = useState("")
  const [tasks, setTasks] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if (message.trim() === "") return

    setTasks([...tasks, message])
    setMessage("")
    setShowForm(false)
  }

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Todo App</h2>

      {/* Button */}
      {!showForm && (
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            ➕ Add Task
          </button>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="card p-4 shadow mt-3">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Task..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Task List */}
      <ul className="list-group mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
