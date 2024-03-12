import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const user =  JSON.parse(localStorage.getItem('admin') as string);

  if (user?.email && user?.userType === "ADMIN" || user?.userType === "SUPER ADMIN") {
    return children;
  }
  return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default PrivateRoute;
