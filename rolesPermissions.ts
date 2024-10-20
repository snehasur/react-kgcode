const rolesPermissions = {
  admin: {
    canView: ['all'],
    canEdit: ['all'],
    canDelete: ['all'],
  },
  caterer: {
    canView: ['food'],
    canEdit: ['food'],
    canDelete: ['food'],
  },
  hr: {
    canView: ['attendance'],
    canEdit: ['attendance'],
    canDelete: ['attendance'],
  },
  laundry: {
    canView: ['clothes'],
    canEdit: ['clothes'],
    canDelete: ['clothes'],
  },
};
// actions.js
export const setUserRole = (role) => ({
  type: 'SET_USER_ROLE',
  payload: role,
});

// reducer.js
const initialState = {
  role: null,
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_ROLE':
      return { ...state, role: action.payload };
    default:
      return state;
  }
};
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = useSelector((state) => state.role);

  return allowedRoles.includes(role) ? children : <Navigate to="/unauthorized" />;
};
<Route path="/food" element={<ProtectedRoute allowedRoles={['admin', 'caterer']}><FoodComponent /></ProtectedRoute>} />
<Route path="/attendance" element={<ProtectedRoute allowedRoles={['admin', 'hr']}><AttendanceComponent /></ProtectedRoute>} />
<Route path="/clothes" element={<ProtectedRoute allowedRoles={['admin', 'laundry']}><ClothesComponent /></ProtectedRoute>} />
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const role = useSelector((state) => state.role);

  return (
    <div>
      {role === 'admin' && <a href="/dashboard">Admin Dashboard</a>}
      {(role === 'admin' || role === 'caterer') && <a href="/food">Manage Food</a>}
      {(role === 'admin' || role === 'hr') && <a href="/attendance">Manage Attendance</a>}
      {(role === 'admin' || role === 'laundry') && <a href="/clothes">Manage Clothes</a>}
    </div>
  );
};
