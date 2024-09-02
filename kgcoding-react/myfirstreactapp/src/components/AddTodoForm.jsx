import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddTodoForm({ onNewItem }) {
  //const [todoName, setTodoName] = useState("");
  //const [dueDate, setDueDate] = useState("");
  const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  // const handelNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handelDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdated are :${noOfUpdates.current}`);
  // };
  const handelAddButtonClicked = (event) => {
    event.preventDefault();
    //const todoName = onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handelAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Tode Here"
            ref={todoNameElement}
            //value={todoName}
            //onChange={handelNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            //value={dueDate}
            //onChange={handelDateChange}
          />
        </div>
        <div className="col-2">
          <button className="btn-success kg-button" type="submit">
            <FaPlus />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoForm;
