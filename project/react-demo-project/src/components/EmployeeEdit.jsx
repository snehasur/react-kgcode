import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import {
  updateEmployee,
  fetchEmployees,
  setSelectedEmployee,
} from "../components/redux/employeeSlice";

import loaderGif from "../assets/loader.gif";

const EmployeeEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { employees, loading, error } = useSelector((state) => state.employee); // Loading state from Redux
  const employee = employees.find((emp) => emp._id === id);

  const [successMessage, setSuccessMessage] = useState("");
  const [loadingSave, setLoadingSave] = useState(false); // Local loading state for saving
  const [formDisabled, setFormDisabled] = useState(false);

  useEffect(() => {
    if (employee) {
      setValue("fullName", capitalizeWords(employee.fullName));
      setValue("email", employee.email);
      setValue("phone", employee.phone);

      // Update selected employee in Redux for header
      dispatch(
        setSelectedEmployee({
          ...employee,
          image: "https://thispersondoesnotexist.com/",
        })
      );
    } else {
      // Fetch employees if not available in the state
      dispatch(fetchEmployees());
    }
  }, [employee, dispatch, setValue]);
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const onSubmit = async (data) => {
    try {
      setFormDisabled(true);
      setLoadingSave(true);
      const updatedData = {
        ...data,
        fullName: capitalizeWords(data.fullName),
      };
      // Dispatch the updateEmployee action
      await dispatch(updateEmployee({ id, ...data }));

      // Update selected employee in Redux after the update
      dispatch(
        setSelectedEmployee({
          ...updatedData,
          _id: id,
          image: "https://via.placeholder.com/40",
        })
      );

      // API call was successful, show success message
      setSuccessMessage("Employee updated successfully!");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Failed to update employee:", error);
      setFormDisabled(false);
    } finally {
      setLoadingSave(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh">
          <img
            src={loaderGif}
            alt="Loading..."
            style={{ width: "100px", height: "100px" }}
          />
        </Box>
      )}

      {/* Employee details form */}
      {!loading && (
        <>
          {loadingSave && (
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
          )}
          <TextField
            {...register("fullName", { required: "Full Name is required" })}
            label="Full Name"
            fullWidth
            margin="normal"
            error={!!errors.fullName}
            helperText={errors.fullName ? errors.fullName.message : ""}
            disabled={formDisabled}
          />

          <TextField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            label="Email"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            disabled={formDisabled}
          />
          <TextField
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+\d{10,15}$/,
                message:
                  "Phone number must start with '+' followed by 10 to 15 digits",
              },
            })}
            label="Phone"
            fullWidth
            margin="normal"
            error={!!errors.phone}
            helperText={errors.phone ? errors.phone.message : ""}
            disabled={formDisabled}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            disabled={formDisabled}
            className="submit-btn">
            {" "}
            Update
          </Button>
          {/* </Box> */}
        </>
      )}

      {/* For success message */}
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage("")}>
        <Alert onClose={() => setSuccessMessage("")} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
      {/* For error message */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => dispatch(clearError())}>
        {" "}
        <Alert onClose={() => dispatch(clearError())} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EmployeeEdit;
