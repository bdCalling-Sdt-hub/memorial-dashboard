import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import Header from "../../layouts/Main/Header";
import { Link } from "react-router-dom";
const Notifications = () => {
  return (
    <div>
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
      <Link to="/settings">
        <div className="flex items-center gap-4 mb-4">
          <RiArrowLeftSLine size={28} color="#0071E3" />
          <h1 className="text-[#0071E3] text-[25px] font-bold">Notifications</h1>
        </div>
      </Link>
      
      {[...Array(4)].map((index) => (
        <div
          key={index}
          className={` border border-[#0071E3] bg-white mt-6 h-[68px]  flex gap-3  mb-2 p-4 rounded-lg cursor-pointer`}
        >
          <div className="w-[12px] mt-[7px] h-[12px] rounded-full bg-[#0071E3]"></div>
          <div>
            <h2 className="text-[14px] font-normal text-[#333333] pb-1">New customer register</h2>
            <p className="text-[8px] font-normal text-[#9D9D9D]">10 minutes ago</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
