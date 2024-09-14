import React from "react";

function UserList({ dataList, handleEdit, handleDelete }) {
  return (
    <ul className="list-group mt-4">
      {dataList.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center">
          {item.fname} {item.lname} - {item.email}
          <div>
            <button
              className="btn btn-sm btn-warning me-2"
              onClick={() => handleEdit(item.id)}>
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
