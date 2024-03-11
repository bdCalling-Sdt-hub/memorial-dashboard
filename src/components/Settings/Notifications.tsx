import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import Header from "../../layouts/Main/Header";
import { Link } from "react-router-dom";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { getNotifications } from "../../redux/apiSlices/getNotificationsSlice";
import Spinner from "../Spinner";
import { Pagination } from "antd";
import baseURL from "../../Config";
import Pusher from 'pusher-js';

const Notifications = () => {
  const dispatch = useAppDispatch();
  const { loading, notifications } = useAppSelector(state=> state.getNotifications);
  const [page, setPage] = useState(1);
  useEffect(()=>{
    dispatch(getNotifications(page));
  }, [dispatch, page, ])

  const handlePageChange=(page)=>{
    setPage(page);
  }

  const handleRead=async(id: any)=>{
    if(id){
      const response = await baseURL.get(`/read-notification?id=${id}`,{
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      if(response?.data?.status === "success"){
        dispatch(getNotifications(page));
      }
    }
  }

  useEffect(()=>{
    Pusher.logToConsole = true;
        const pusher = new Pusher('ed3fa994e71a7b25af7e', {
          cluster: 'ap2'
        });
        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data:any) {
          alert(data);
        });
  }, []);


  return (
    <div >
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
      <Link to="/settings">
        <div className="flex items-center gap-4 mb-4">
          <RiArrowLeftSLine size={28} color="#0071E3" />
          <h1 className="text-[#0071E3] text-[25px] font-bold">Notifications</h1>
        </div>
      </Link>
      

      {
        loading
        ?
        <div className="h-[75vh] w-full flex items-center justify-center">
          <Spinner size="large"/>
        </div>
        :
        <div>
          <div className="h-[75vh] border overflow-y-scroll w-full pb-12">
            {notifications?.Notifications?.map((notification, index) => (
              <div
                onClick={()=>handleRead(notification?.id)}
                key={index}
                className={` border border-[#0071E3] bg-white mt-6 h-[68px]  flex gap-3  mb-2 p-4 rounded-lg cursor-pointer`}
              >
                <div 
                  className={`w-[12px] mt-[7px] h-[12px] rounded-full ${notification?.read_at === null ? "bg-[#0071E3]" : "bg-white"} `}></div>
                <div>
                  <h2 className="text-[14px] font-normal text-[#333333] pb-1">{notification?.data?.message}</h2>
                  <p className="text-[8px] font-normal text-[#9D9D9D]">{moment(notification?.data?.time).startOf('day').fromNow()}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-end">
              <Pagination 
                defaultPageSize={notifications?.pagination?.per_page} 
                defaultCurrent={notifications?.pagination?.current_page} 
                total={notifications?.pagination?.total} 
                onChange= {handlePageChange} 
                /* 
                */
                
                />
            </div>
        </div>

      }
      


      


    </div>
  );
};

export default Notifications;
