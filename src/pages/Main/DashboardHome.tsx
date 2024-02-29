import RecentTransaction from "../../components/DashboardHome/ReacentTransaction/RecentTransaction";
import TransactionRatio from "../../components/DashboardHome/TransactionRatio";
import TransactionStatus from "../../util/TransactionStatus";
import Layer from "../../assets/Layer_1.png";
import Header from "../../layouts/Main/Header";
import HeadingText from "../../util/HeadingText";
import { Link } from "react-router-dom";
import UserCard from "../../util/UserCard";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { AllUser } from "../../redux/apiSlices/allUserSlice";

const DashboardHome = () => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state=> state.allUser);
  const {profile} = useAppSelector(state=> state.getProfile);
  useEffect(()=>{
    dispatch(AllUser(1));
  },[dispatch])
  return (
    <div>
      <div className="flex gap-5 w-full">
        <div className="w-[75%] grid grid-cols-1 gap-5">
          <div className="w-full px-5 flex items-center justify-between bg-white rounded-[16px] h-[138px]">
            <div>
              <h1 className="p-0 font-medium m-0 text-[#0071E3] text-[30px]">Welcome, {profile?.fullName?.split(' ')[0]}</h1>
              <p className="text-[#555555] text-[18px]">Have a nice day at work</p>
            </div>
            <img src={Layer} alt="" />
          </div>
          <TransactionStatus />
          <TransactionRatio />
        </div>
        <div className="w-[25%] grid grid-cols-1 gap-5">
          <div className="flex items-end justify-end h-[48px]">
              <Header/>
          </div>
          <div className="bg-white h-[518px] p-4 rounded-md overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <HeadingText>Recent Users</HeadingText>
              <Link to="/users" className="text-[#0071E3] text-[16px] font-semibold">
                See All
              </Link>
            </div>
            <div className="bg-[#8ABEF2] h-[1px] w-full mb-4"></div>
            <div className="grid grid-cols-1 gap-4 ">
              {
                users?.data?.slice(0, 6).map((user, index) => (
                <UserCard key={index} user={user} />
                ))
              }
            </div>
        </div> 
        </div>
      </div>
      <RecentTransaction />
    </div>
  );
};

export default DashboardHome;
