import { IconSettings } from "@tabler/icons-react";
import { TbUsers } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { TbCrown } from "react-icons/tb";
import { PiBookOpenLight } from "react-icons/pi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";

interface SideProps {
  open: boolean;
}

const Sidebar: React.FC<SideProps> = () => {
  const { pathname } = useLocation();

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdOutlineSpaceDashboard size={24} />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <TbUsers size={24} />,
    },
    {
      title: "Income",
      path: "/transactions",
      icon: <BiDollarCircle size={24} />,
    },
    {
      title: "Subscription",
      path: "/subscription",
      icon: <TbCrown size={20} />,
    },
    {
      title: "Stories",
      path: "/workers",
      icon: <PiBookOpenLight size={20} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IconSettings size={24} />,
    },
  ];

  return (
    <div
      className={`${"col-span-3"} bg-[white] h-[calc(100vh-40px)]  rounded-lg py-10 duration-300 transition-all`}
    >
      <ul className="flex gap-3 flex-col h-full">
        <li className="mx-auto space-y-2 mb-5">
          <img src={logo} alt="logo" />
          <h2 className="text-white text-lg">Memorial</h2>
        </li>
        {linkItems.map((item, index) => (
          <li
            key={index}
            className={`text-[18px] px-4 py-3 ${
              item.path === pathname ? "bg-[#0071E3] text-white" : "text-[#0071E3]"
            } `}
          >
            <Link to={item.path} className="flex items-center gap-2">
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </Link>
          </li>
        ))}
        <li className="mt-auto mx-4 px-6 py-4 bg-white border border-[#0071E3] rounded-[8px]  cursor-pointer text-md">
          <Link to="/auth/login" className="flex items-center gap-2">
            <div className={`m-0`}>
              <HiLogout className="text-red-500" size={24} />
            </div>
            <div className={`text-[#0071E3]`}>Logout</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
