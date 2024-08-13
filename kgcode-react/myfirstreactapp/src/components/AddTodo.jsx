import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handelAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Tode Here"
            value={todoName}
            onChange={handelNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handelDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn-success kg-button"
            onClick={handelAddButtonClicked}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
