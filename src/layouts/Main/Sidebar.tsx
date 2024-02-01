import {
  IconApps,
  IconCash,
  IconClipboardList,
  IconLogout2,
  IconSettings,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";

interface SideProps {
  open: boolean;
}

const Sidebar: React.FC<SideProps> = ({ open }) => {
  const { pathname } = useLocation();

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <IconApps size={20} />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <IconUsers size={20} />,
    },
    {
      title: "Transactions",
      path: "/transactions",
      icon: <IconCash size={20} />,
    },
    {
      title: "Transaction History",
      path: "/transaction-history",
      icon: <IconClipboardList size={20} />,
    },
    {
      title: "Workers",
      path: "/workers",
      icon: <IconUsersGroup size={20} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IconSettings size={20} />,
    },
  ];

  return (
    <div
      className={`${
        open ? "col-span-1" : "col-span-2"
      } bg-[#B278FB] h-[calc(100vh-40px)]  rounded-lg py-10 duration-300 transition-all`}
    >
      <ul className="flex gap-3 flex-col h-full">
        <li className="mx-auto space-y-2 mb-5">
          <img src={logo} alt="logo" />
          <h2 className="text-white text-lg">Russend</h2>
        </li>
        {linkItems.map((item, index) => (
          <li
            key={index}
            className={`text-[15px] px-4 py-3 ${
              item.path === pathname ? "bg-white text-violet-400" : "text-white"
            } `}
          >
            <Link to={item.path} className="flex items-center gap-2">
              <div className={`${open ? "mx-auto" : "m-0"}`}>{item.icon}</div>
              <div className={`${open ? "hidden" : "block"}`}>{item.title}</div>
            </Link>
          </li>
        ))}
        <li className="mt-auto px-4 py-4 bg-white text-violet-400 cursor-pointer text-md">
          <Link to="/auth/login" className="flex items-center gap-2">
            <div className={`${open ? "mx-auto" : "m-0"}`}>
              <IconLogout2 size={20} />
            </div>
            <div className={`${open ? "hidden" : "block"}`}>Logout</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
