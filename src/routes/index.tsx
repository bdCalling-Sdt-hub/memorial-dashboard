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
import Transactions from "../pages/Main/Transactions";
import Users from "../pages/Main/Users";
import Workers from "../pages/Main/Workers";
import Subscription from "../pages/Main/Subscription";
import NotFound from "../pages/NotFound";
import EditSubscription from "../pages/Main/EditSubscription";
import StoryDetails from "../components/Workers/StoryDetails";
import AdminRoute from "../routes/AdminRoute";
import StoryRequestDetails from "../components/Workers/StoryRequestDetails";
import Categories from "../pages/Main/Categories";
import MakeAdmin from "../pages/Main/MakeAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AdminRoute><DashboardHome /></AdminRoute> ,
      },
      {
        path: "/users",
        element: <AdminRoute><Users /> </AdminRoute>,
      },
      {
        path: "/category",
        element: <AdminRoute><Categories /> </AdminRoute>,
      },
      {
        path: "/transactions",
        element: <AdminRoute><Transactions /> </AdminRoute>,
      },
      {
        path: "/subscription",
        element: <AdminRoute> <Subscription /></AdminRoute>,
      },
      {
        path: "/edit-subscription/:id",
        element: <AdminRoute><EditSubscription /> </AdminRoute>,
      },
      {
        path: "/workers",
        element:<AdminRoute> <Workers /> </AdminRoute>,
      },
      {
        path: "/workers/:workerType/:id",
        element: <AdminRoute><StoryDetails /> </AdminRoute>,
      },
      {
        path: "/workers/story-request-details/:id",
        element: <AdminRoute><StoryRequestDetails /> </AdminRoute>,
      },

      {
        path: "/settings",
        element: <AdminRoute><Settings /> </AdminRoute>,
      },
      {
        path: "/make-admin",
        element: <AdminRoute><MakeAdmin /> </AdminRoute>,
      },
      {
        path: "/settings/:settingType",
        element:  <AdminRoute><SettingDetail /></AdminRoute>,
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
