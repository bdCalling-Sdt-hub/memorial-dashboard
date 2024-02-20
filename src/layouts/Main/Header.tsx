import { FiBell } from "react-icons/fi";
import { Badge } from "antd";
import { Link, useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getProfile } from "../../redux/apiSlices/authentication/getProfileSlice";
import { getNotifications } from "../../redux/apiSlices/getNotificationsSlice";
import moment from "moment";


const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const handleNavigate = (e:any)=>{
    e.stopPropagation()
    navigate('/settings/notifications')
  }

  const dispatch = useAppDispatch();
  const {profile} = useAppSelector(state=> state.getProfile);
  
  useEffect(()=>{
    dispatch(getProfile())
  },[dispatch]);



  const { loading, notifications } = useAppSelector(state=> state.getNotifications);
  useEffect(()=>{
    dispatch(getNotifications());
  }, [dispatch]);

  console.log(notifications);
  return (
    <div className="flex items-center justify-between w-fit">
      <div className="flex items-center gap-4">
        <div onClick={()=>setOpen(!open)} className="relative cursor-pointer w-[48px] flex items-center justify-center h-[48px] p-2 bg-white rounded-full">
          <Badge style={{ background: "#0071E3", right: "-8px" }} count={notifications?.length}>
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
              {
                notifications?.slice(0,3).map((notification, index) => (
                  <div
                    key={index}
                    className="flex gap-3  mb-2 px-4 py-2 rounded-lg cursor-pointer"
                  >
                    <div className="w-[12px] h-[12px] rounded-full bg-[#0071E3]"></div>
                    <div>
                      <h2 className="text-[10px] font-semibold text-[#333333]">{notification?.data?.message}</h2>
                      <p className="text-[8px] text-[#A1A1A1]">{moment(notification?.data?.time).startOf('day').fromNow()}</p>
                    </div>
                  </div>
                ))
              }
              <p className="text-[#0071E3] text-[18px] font-medium text-center " onClick={handleNavigate}>View all</p>
            </div>
          }
          {/* notification dropdown end */}

        </div>
        <Link className="flex items-center gap-3" to="/settings/profile">
          <img
            src={profile?.image !== null ? profile?.image : "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h3 className="text-[#0071E3] font-medium text-[14px] text-center">{profile?.fullName}</h3>
            <p className="text-right font-semibold text-[14px]">{profile?.userType}</p>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Header;
