import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployees,
  removeEmployee,
} from "../components/redux/employeeSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import loaderGif from "../assets/loader.gif";

const EmployeeListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employees, loading } = useSelector((state) => state.employee);
  const [deletedMessage, setDeletedMessage] = useState("");

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(removeEmployee(id));
    setDeletedMessage("Employee deleted successfully!");
  };
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Box>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80vh">
          <img
            src={loaderGif}
            alt="Loading..."
            style={{ width: "100px", height: "100px" }}
          />
        </Box>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <TableRow key={emp._id}>
                    <TableCell>{capitalizeWords(emp.fullName)}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{emp.phone}</TableCell>
                    <TableCell>
                      <Button
                        className="edit-btn"
                        variant="contained"
                        onClick={() => handleEdit(emp._id)}>
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(emp._id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>No employees found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* For deleted message */}
      <Snackbar
        open={!!deletedMessage}
        autoHideDuration={6000}
        onClose={() => setDeletedMessage("")}>
        <Alert onClose={() => setDeletedMessage("")} severity="success">
          {deletedMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EmployeeListing;
