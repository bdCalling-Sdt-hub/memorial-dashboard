import { FiBell } from "react-icons/fi";
import { Badge } from "antd";
import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";
import Notifications from "../../components/Settings/Notifications";


const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const handleNavigate = (e:any)=>{
    e.stopPropagation()
    navigate('/settings/notifications')
  }
  return (
    <div className="flex items-center justify-between w-fit">
      <div className="flex items-center gap-4">
        <div onClick={()=>setOpen(!open)} className="relative cursor-pointer w-[48px] flex items-center justify-center h-[48px] p-2 bg-white rounded-full">
          <Badge style={{ background: "#0071E3", right: "-8px" }} count={5}>
            <FiBell size={24} />
          </Badge>
          {
            open &&
            <div className="p-4 absolute border border-[#0071E3] rounded-b-[16px] z-20 w-[251px] h-[350px] top-8 right-4 bg-white">
              <Notifications/>
              <p className="text-[#0071E3] text-[18px] font-medium text-center " onClick={handleNavigate}>View all</p>
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

    </div>
  );
};

export default Header;
