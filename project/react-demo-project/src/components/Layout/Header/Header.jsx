import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  const { selectedEmployee } = useSelector((state) => state.employee);
  const location = useLocation();
  const isEditing = location.pathname.startsWith("/employee/edit/");

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const headerTitle = isEditing
    ? capitalizeWords(`${selectedEmployee?.fullName || "Employee "} - Details`)
    : "Employee Listing";

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography variant="h6" component="div">
            {headerTitle}
          </Typography>
        </Link>
        <div style={{ flexGrow: 1 }} />{" "}
        <Avatar
          src={
            selectedEmployee?.image ||
            "https://randomuser.me/api/portraits/men/1.jpg"
          }
          alt={selectedEmployee?.fullName || "User Avatar"}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
