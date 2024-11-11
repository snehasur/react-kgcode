import { Link , useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import { useAppDispatch, useAppSelector } from "../../store/store";
import { token, user, isAuthenticated, logout } from "../../store/authSlice";

const MainHeader = () => {
  const userDetails = useAppSelector(user); // Use the user selector function
  const userIsAuthenticated = useAppSelector(isAuthenticated); // Use the isAuthenticated selector function
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(userIsAuthenticated,'userIsAuthenticated')

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
           
            {userIsAuthenticated ? ( 
              <>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </div>
              </li>
              </>
            ) : (
              <>           
               <li className="nav-item">
               <Link className="nav-link" to="/login">
                 Login
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/register">
                 Register
               </Link>
             </li>
             </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
