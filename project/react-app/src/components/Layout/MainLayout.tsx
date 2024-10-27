import MainHeader from "./MainHeader";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MainLayout = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? (   
    <div>
      <MainHeader />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-md-3 bg-light p-3">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="col-12 col-md-9 p-3">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>)
  : (
    <Navigate to="/login" replace />
  );
};

export default MainLayout;
