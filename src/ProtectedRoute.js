import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from './store';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { login } = useUserStore();

  useEffect(() => {
    if (!login || login.length === 0) {
      console.log('Not logged in, redirecting to login');
      navigate('/admin-login');
    }
  }, [login, navigate]);

  if (!login || login.length === 0) {
    return null; // Prevent rendering protected route until the check is done
  }

  return children; // Render protected route if logged in
};

export default ProtectedRoute;
