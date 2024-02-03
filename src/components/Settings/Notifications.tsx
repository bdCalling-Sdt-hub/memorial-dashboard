import { useParams } from "react-router-dom";
import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import Header from "../../layouts/Main/Header";
const Notifications = () => {
  const { settingType } = useParams();
  console.log(settingType)
  return (
    <div>
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
      <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Edit Subscriptions</HeadingText>
      
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
