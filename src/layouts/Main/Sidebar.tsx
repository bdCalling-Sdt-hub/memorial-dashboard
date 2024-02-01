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

const Sidebar: React.FC<SideProps> = ({ open }) => {
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
      path: "/income",
      icon: <BiDollarCircle size={24} />,
    },
    {
      title: "Subcription",
      path: "/transactions",
      icon: <TbCrown size={24} />,
    },
    {
      title: "Stories",
      path: "/transaction-history",
      icon: <PiBookOpenLight size={24} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IconSettings size={24} />,
    },
  ];

  return (
    <div
      className={`${
        open ? "col-span-1" : "col-span-2"
      } bg-white text-[##0071E3] h-[calc(100vh-40px)]  rounded-lg py-10 duration-300 transition-all`}
    >
      <ul className="flex gap-3 flex-col h-full">
        <li className="mx-auto space-y-2 mb-5">
          <img src={logo} alt="logo" />
        </li>
        {linkItems.map((item, index) => (
          <li
            key={index}
            className={`text-[18px] px-4 py-3 ${
              item.path === pathname ? "bg-[#0071E3] text-white" : "text-[#0071E3]"
            } `}
          >
            <Link to={item.path} className="flex items-center gap-2">
              <div className={`${open ? "mx-auto" : "m-0"}`}>{item.icon}</div>
              <div className={`${open ? "hidden" : "block"}`}>{item.title}</div>
            </Link>
          </li>
        ))}
        <li className="mt-auto mx-4 px-4 py-4 bg-white border border-[#0071E3] rounded-[8px]  cursor-pointer text-md">
          <Link to="/auth/login" className="flex items-center gap-2">
            <div className={`${open ? "mx-auto" : "m-0"}`}>
              <HiLogout className="text-red-500" size={24} />
            </div>
            <div className={`${open ? "hidden" : "block"} text-[#0071E3]`}>Logout</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
