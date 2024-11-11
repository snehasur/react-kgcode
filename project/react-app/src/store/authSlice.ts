import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

// Retrieve the user data from local storage
const userData: string | null = localStorage.getItem('user');
const ltoken: string | null = localStorage.getItem('token');

let luser: User | null = null; // Default to null if no user data is found

if (userData && ltoken) {
  try {
    luser = JSON.parse(userData) as User; // Explicit type assertion
  } catch (error) {
    console.error('Failed to parse user data from localStorage:', error);
    localStorage.removeItem('user'); // Clear corrupted data
    localStorage.removeItem('token');
  }
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: !!luser && !!ltoken, // True if both user and token exist
  user: luser,
  token: ltoken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  selectors: {
    isAuthenticated: (state: AuthState) => state.isAuthenticated,
    token: (state: AuthState) => state.token,
    user: (state: AuthState) => state.user,
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
export const { isAuthenticated ,user ,token} = authSlice.selectors;
