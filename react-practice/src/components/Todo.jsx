import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

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

    // Check for uniqueness (only for new tasks or edited tasks that change value)
    const isTaskDuplicate = tasks.some(
      (t) =>
        t.text.toLowerCase() === task.trim().toLowerCase() && t.id !== editId
    );

    if (isTaskDuplicate) {
      setError("Task already exists");
      return;
    }

    if (isEditing) {
      const updatedTasks = tasks.map((t) =>
        t.id === editId ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setSuccessMessage("Task updated successfully");
      setMessageType("success");
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: task,
        isChecked: false, // Ensure default value for isChecked
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setSuccessMessage("Task added successfully");
      setMessageType("success");
    }

    setTask("");
    setError("");

    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, isChecked: !t.isChecked } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask(taskToEdit.text);
    setEditId(id);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTasks = tasks.filter((t) => t.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setSuccessMessage("Task deleted successfully");
      setMessageType("danger");

      // Clear delete success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    }
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

      {successMessage && (
        <div className={`alert alert-${messageType} mt-3`}>
          {successMessage}
        </div>
      )}

      <ul className="list-group mt-4">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ textDecoration: t.isChecked ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={t.isChecked || false} // Ensure checkbox is always controlled
              onChange={() => handleCheckboxChange(t.id)}
              className="me-2"
            />
            {t.text}
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleEdit(t.id)}
                disabled={t.isChecked} // Disable button if task is checked
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(t.id)}
              >
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
