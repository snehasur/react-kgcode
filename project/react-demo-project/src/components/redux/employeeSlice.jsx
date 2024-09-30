import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch employee list
export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = await axios.get(
      "https://interviewtesting.onrender.com/v1/users/employee/list"
    );
    return response.data.data;
  }
);

// Remove employee
export const removeEmployee = createAsyncThunk(
  "employee/removeEmployee",
  async (id) => {
    await axios.delete(
      `https://interviewtesting.onrender.com/v1/users/employee-remove/${id}`
    );
    return id;
  }
);

// Update employee
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async ({ id, ...data }) => {
    const response = await axios.put(
      `https://interviewtesting.onrender.com/v1/users/employee-update/${id}`,
      data
    );
    return response.data;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    loading: false,
    selectedEmployee: null,
  },
  reducers: {
    setSelectedEmployee(state, action) {
      state.selectedEmployee = action.payload;
    },
    clearError: (state) => {
      state.error = null; // Clear error message
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch employees
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.loading = false;
      })
      // Remove employee
      .addCase(removeEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(
          (emp) => emp._id !== action.payload
        );
      })
      // Update employee
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const updatedEmployee = action.payload; // Assuming the API returns the updated employee
        const index = state.employees.findIndex(
          (emp) => emp._id === updatedEmployee._id
        );
        if (index !== -1) {
          state.employees[index] = updatedEmployee; // Update the employee in the state
          state.selectedEmployee = updatedEmployee; // Update the selected employee
        }
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false; // Set loading to false on rejection
        state.error = action.payload; // Set error message from action payload
      });
  },
});

export const { setSelectedEmployee, clearError } = employeeSlice.actions; // Export the action
export default employeeSlice.reducer;
