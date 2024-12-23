import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-md-3 bg-light p-3">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="col-12 col-md-9 p-3">
            <main>{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
