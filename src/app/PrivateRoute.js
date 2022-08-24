import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location.state?.from }} replace />
  );
};

export default PrivateRoute;
