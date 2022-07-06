import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const session = useSelector((state) => state.session);
  console.log(session);
  return session.user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
