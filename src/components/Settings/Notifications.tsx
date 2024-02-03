import { useParams } from "react-router-dom";
import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import Header from "../../layouts/Main/Header";
const Notifications = () => {
  const { settingType } = useParams();
  console.log(settingType)
  return (
    <div>
      {
        settingType === "notifications" 
        ?
        <>
          <div className="flex items-end justify-end mb-11">
            <Header/>
          </div>
          <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Edit Subscriptions</HeadingText>
        </>
        :
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-semibold ">4 notifications</p>
          <p className="text-[#0071E3] text-[10px] font-medium">Mark as read</p>
        </div>
      }
      
      { settingType === "notifications"  ?
        null
        : 
        <div className="bg-[#0071E3] h-[1px] my-5 w-full"></div>
      }

      {[...Array(4)].map((index) => (
        <div
          key={index}
          className={` ${settingType === "notifications" ? "border border-[#0071E3] bg-white mt-6" : "border-none bg-transparent mt-0"  }   flex gap-3  mb-2 px-4 py-2 rounded-lg cursor-pointer`}
        >
          <div className="w-[12px] mt-[7px] h-[12px] rounded-full bg-[#0071E3]"></div>
          <div>
            <h2 className="text-[14px] text-[#333333]">New customer register</h2>
            <p className="text-[8px] text-[#A1A1A1]">10 minutes ago</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
