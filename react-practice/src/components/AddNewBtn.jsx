import React from "react";

function AddNewBtn({ handleAddNew }) {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <button className="btn btn-primary" onClick={handleAddNew}>
          Add New
        </button>
      </div>
    </div>
  );
}

export default AddNewBtn;
