// import './index.css';
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const [TaskToggle, setTaskToggle] =useState(false)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task-tracker"));

    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  useEffect(() => {
    if (tasks.length  >= 0) {
      localStorage.setItem("task-tracker", JSON.stringify(tasks));
    }
  }, [tasks]);

  //  add task
  function addTask(task) {
    const newTasks = { id: uuidv4(), ...task };
    setTasks([...tasks, newTasks]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleReminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }
  return (
    <div className="container">
      <Header
        onAdd={() => setTaskToggle(!TaskToggle)}
        btnCloseAdd={TaskToggle}
      />
      {TaskToggle && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To show"
      )}
    </div>
  );
}

export default App;
