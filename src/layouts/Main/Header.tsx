import { FiBell } from "react-icons/fi";
import { Badge } from "antd";
import { Link, useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getProfile } from "../../redux/apiSlices/authentication/getProfileSlice";
import { getNotifications } from "../../redux/apiSlices/getNotificationsSlice";
import moment from "moment";
import ImgConfig from "../../ImgConfig";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  const handleNavigate = (e:any)=>{
    e.stopPropagation();
    navigate('/settings/notifications');
  }

  const dispatch = useAppDispatch();
  const {profile} = useAppSelector(state=> state.getProfile);
  localStorage.setItem('userInfo', JSON.stringify(profile))
  
  useEffect(()=>{
    dispatch(getProfile())
  },[dispatch]);

  const { loading, notifications } = useAppSelector(state=> state.getNotifications);
  const notify = notifications?.Notifications?.filter((item)=> item?.read_at === null);
  useEffect(()=>{
    dispatch(getNotifications(1));
  }, [dispatch]);


  useEffect(()=>{
    
  },[])
  return (
    <div className="flex items-center justify-between w-fit">
      <div className="flex items-center gap-4">
        <div onClick={()=>setOpen(!open)} className="relative cursor-pointer w-[48px] flex items-center justify-center h-[48px] p-2 bg-white rounded-full">
          <Badge style={{ background: "#0071E3", right: "-8px" }} count={notify?.length !== 0 ? notify?.length : 0}>
            <FiBell size={24} />
          </Badge>

          {/* notification dropdown start */}
          {
            open &&
            <div className="p-4 absolute border border-[#0071E3]  rounded-b-[16px] z-20 w-[251px] h-[350px] top-8 right-4 bg-white">
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-semibold ">{notify?.length !== 0 ? notify?.length : 0} notifications</p>
                <p className="text-[#0071E3] text-[10px] font-medium">Mark as read</p>
              </div>
              <div className="bg-[#0071E3] h-[1px] my-4 w-full"></div>
              {
                notifications?.Notifications?.slice(0,3).map((notification, index) => (
                  <div
                    key={index}
                    className="flex gap-3  mb-2 px-4 py-2 rounded-lg cursor-pointer"
                  >
                    <div className={`w-[12px] h-[12px] rounded-full ${notification?.read_at === null && "bg-[#0071E3]"}`}></div>
                    <div>
                      <h2 className="text-[10px] font-semibold text-[#333333]">{notification?.data?.message}</h2>
                      <p className="text-[8px] text-[#A1A1A1]">{moment(notification?.data?.time).startOf('day').fromNow()}</p>
                    </div>
                  </div>
                ))
              }
              <p className="text-[#0071E3] absolute bottom-2 left-[35%] text-[18px] font-medium text-center " onClick={handleNavigate}>View all</p>
            </div>
          }
          {/* notification dropdown end */}

        </div>
        <Link className="flex items-center gap-3" to="/settings/profile">
          <img
            src={profile?.image  ? (`${ImgConfig}${profile?.image}`): "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}
            width={48}
            height={48}
            style={{borderRadius: "100%"}}
            className="rounded-full"
          />
          <div >
            <h3 className="text-[#0071E3] font-medium text-[14px] text-right">{profile?.fullName?.slice(0,15) + "..."}</h3>
            <p className="text-right font-semibold text-[14px]">{profile?.userType}</p>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Header;
