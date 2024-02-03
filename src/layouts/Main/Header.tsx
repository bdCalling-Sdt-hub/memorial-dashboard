import { FiBell } from "react-icons/fi";
import { Badge } from "antd";
import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";


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

          {/* notification dropdown start */}
          {
            open &&
            <div className="p-4 absolute border border-[#0071E3] rounded-b-[16px] z-20 w-[251px] h-[350px] top-8 right-4 bg-white">
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-semibold ">4 notifications</p>
                <p className="text-[#0071E3] text-[10px] font-medium">Mark as read</p>
              </div>
              <div className="bg-[#0071E3] h-[1px] my-4 w-full"></div>
              {[...Array(4)].map((index) => (
                <div
                  key={index}
                  className="flex gap-3  mb-2 px-4 py-2 rounded-lg cursor-pointer"
                >
                  <div className="w-[12px] mt-[7px] h-[12px] rounded-full bg-[#0071E3]"></div>
                  <div>
                    <h2 className="text-[14px] text-[#333333]">New customer register</h2>
                    <p className="text-[8px] text-[#A1A1A1]">10 minutes ago</p>
                  </div>
                </div>
              ))}
              <p className="text-[#0071E3] text-[18px] font-medium text-center " onClick={handleNavigate}>View all</p>
            </div>
          }
          {/* notification dropdown end */}

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
