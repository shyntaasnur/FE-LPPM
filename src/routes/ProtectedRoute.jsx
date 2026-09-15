import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Cek token dari localStorage
  const token = localStorage.getItem('token'); 
  const isAuthenticated = Boolean(token);

  // Jika belum terautentikasi, redirect ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Jika terautentikasi, tampilkan layout admin
  return <Outlet />;
};

export default ProtectedRoute;