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
          <Link className="nav-link" to="/about">
            <i className="bi bi-info-circle"></i> About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
