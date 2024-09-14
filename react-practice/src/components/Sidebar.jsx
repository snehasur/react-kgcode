import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/formnew">
            <i className="bi bi-file-earmark-plus"></i> New Form
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            <i className="bi bi-info-circle"></i> About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todo">
            <i className="bi bi-list-task"></i> Todo List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jsonplaceholder-crud">
            <i className="bi bi-clipboard-data"></i> JSONPlaceholder CRUD
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jsonplaceholder-crud-abort">
            <i className="bi bi-exclamation-octagon"></i> JSONPlaceholder CRUD
            with Abort
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dynamic-input">
            <i className="bi bi-input-cursor"></i> Dynamic Input
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/parent">
            <i className="bi bi-people"></i> Parent
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form">
            <i className="bi bi-ui-checks"></i> Form
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form-validation-add">
            <i className="bi bi-plus-circle"></i> Form Validation Add
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form-validation-edit">
            <i className="bi bi-pencil-square"></i> Form Validation With Edit
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form-validation-edit-props">
            <i className="bi bi-pencil-square"></i> Form Validation With Edit
            With Props
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">
            <i className="bi bi-pencil-square"></i> Counter
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
