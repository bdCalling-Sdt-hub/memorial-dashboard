import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();

  const user = {
    email: "siffahim25@gmail.com",
    role: "admin",
  };

  if (user.email && user.role === "admin") {
    return children;
  }
  return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default PrivateRoute;
