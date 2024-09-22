import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
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
    </div>
  );
};

export default MainLayout;
