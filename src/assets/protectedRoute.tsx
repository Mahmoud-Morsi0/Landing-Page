

import { useUser } from '@/context/userContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const {user} = useUser(); // assuming you have a useAuth hook that returns the current user
  return user? <Outlet/> : <Navigate to="/auth/login"/>
}

export default ProtectedRoute