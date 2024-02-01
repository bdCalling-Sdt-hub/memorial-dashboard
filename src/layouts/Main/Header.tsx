import { FiBell } from "react-icons/fi";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import Notifications from "../../components/Settings/Notifications";

interface HeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div onClick={()=>setOpen(!open)} className="relative cursor-pointer w-[48px] flex items-center justify-center h-[48px] p-2 bg-white rounded-full">
          <Badge style={{ background: "#0071E3", right: "-8px" }} count={5}>
            <FiBell size={24} />
          </Badge>
          {
            open &&
            <div className="p-4 absolute border border-[#0071E3] rounded-b-[16px] w-[251px] h-[312px] top-8 right-4 bg-white">
              <Notifications/>
            </div>
          }
        </div>
        <Link className="flex items-center gap-3" to="/settings/profile">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h3 className="text-[#0071E3] font-medium text-[14px] text-center">Jane Cooper</h3>
            <p className="text-right font-semibold text-[14px]">Admin</p>
          </div>
        </Link>
      </div>

      {

      }
    </div>
  );
};

export default Header;
