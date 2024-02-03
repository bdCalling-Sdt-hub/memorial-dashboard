import { createBrowserRouter } from "react-router-dom";
import Auth from "../layouts/Auth/Auth";
import Main from "../layouts/Main/Main";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Login from "../pages/Auth/Login";
import ResetPassword from "../pages/Auth/ResetPassword";
import Verify from "../pages/Auth/Verify";
import DashboardHome from "../pages/Main/DashboardHome";
import SettingDetail from "../pages/Main/SettingDetail";
import Settings from "../pages/Main/Settings";
import TransactionHistory from "../pages/Main/TransactionHistory";
import Transactions from "../pages/Main/Transactions";
import Users from "../pages/Main/Users";
import Workers from "../pages/Main/Workers";
import Subscription from "../pages/Main/Subscription";
import NotFound from "../pages/NotFound";
import EditSubscription from "../pages/Main/EditSubscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/edit-subscription",
        element: <EditSubscription />,
      },
      {
        path: "/workers",
        element: <Workers />,
      },

      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/:settingType",
        element: <SettingDetail />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
