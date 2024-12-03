import tasks from "../src/tasks.js"

function App() {

  console.log(tasks)
  // array 1
  const todoTask = tasks.filter((task) => task.state === 'backlog' || task.state === 'in_progress')
  // array 2
  const completedTask = tasks.filter((task) => {
    return (
      task.state === 'completed'
    )
  });
  console.log(completedTask)

  return (
    <>
      <header className="main-header">
        <div className="container">
          <h1>Task Menager</h1>
        </div>
      </header>
      <main>
        <section className="task-section">
          <div className="container">
            <h2 className="task-title">Current Task({todoTask.length})</h2>
          </div>
          <div className="container">
            <ul className="task-list">
              {todoTask.map((task) =>
                <li key={task.id}
                  className="task-item">
                  <div className="task-container">
                    <span className="task-name">{task.title}</span>
                    <span className="task-state">{task.state}</span>
                  </div>
                  <div>
                    priority: {task.priority}
                  </div>
                  <div>
                    Est. time: {task.estimatedTime}
                  </div>
                </li>)}

            </ul>
          </div>
        </section>

        <section className="task-section">
          <div className="container">
            <h2 className="task-title">Completed Task({completedTask.length})</h2>
          </div>
          <div className="container">
            <ul className="task-list">
              {completedTask.map((task) =>
                <li key={task.id}
                  className="task-item">
                  <div className="task-container">
                    <span className="task-name">{task.title}</span>
                    <span className="task-state">{task.state}</span>
                  </div>
                  <div>
                    priority: {task.priority}
                  </div>
                  <div>
                    Est. time: {task.estimatedTime}
                  </div>
                </li>)}

            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
export default App
