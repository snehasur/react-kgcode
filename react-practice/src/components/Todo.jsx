import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleChange = (e) => {
    setTask(e.target.value);
    if (e.target.value.trim() === "") {
      setError("Task cannot be empty");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      setError("Task cannot be empty");
      return;
    }

    if (isEditing) {
      const updatedTasks = tasks.map((t) => {
        console.log(t);
        //t.id === editId ? { ...t, text: task } : t
        if (t.id === editId) {
          console.log(t);
          return { ...t, text: task };
        } else {
          return t;
        }
      });
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    setTask("");
    setError("");
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask(taskToEdit.text);
    setEditId(id);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">To-Do Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${error ? "is-invalid" : ""}`}
            value={task}
            onChange={handleChange}
            placeholder="Enter task"
          />
          <div className="invalid-feedback">{error}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </form>
      <ul className="list-group mt-4">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="list-group-item d-flex justify-content-between align-items-center">
            {t.text}
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleEdit(t.id)}>
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(t.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
