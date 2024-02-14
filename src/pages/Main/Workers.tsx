import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconPlus,
  IconUser,
} from "@tabler/icons-react";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import WorkersTable from "../../components/Workers/WorkersTable";
import HeadingText from "../../util/HeadingText";
import InputField from "../../util/InputField";
import SearchField from "../../util/SearchField";
import Header from "../../layouts/Main/Header";
import { IoIosArrowDown } from "react-icons/io";
import photo from "../../assets/Rectangle.png";
import { Pagination } from 'antd';
import UserStory from "../../components/Workers/UserStory";
import StoryRequest from "../../components/Workers/StoryRequest";
const Workers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [Switch, setSwitch] = useState("user") ;
  const handleChange=(e:string)=>{
    setSwitch(e)
  }
  
  
  return (
    <>
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={()=>handleChange("user")} className={`w-[157px] h-[36px] rounded-lg  border ${Switch === "user" ? "bg-[#0071E3] text-white" : "border-[#0071E3] bg-white text-[#0071E3]"} `}>User Stories</button>
          <button onClick={()=>handleChange("req")} className={`w-[157px] h-[36px] rounded-lg  border ${Switch === "req" ? "bg-[#0071E3] text-white" : "border-[#0071E3] bg-white text-[#0071E3]"} `}>Story Requests</button>
        </div>
        <div 
          onClick={()=>setOpenDropdown(!openDropdown)} 
          className="
            relative  
            w-[120px] 
            border
            bg-white 
            border-[#0071E3] 
            rounded-[4px] 
            flex 
            items-center 
            gap-2 
            px-[9px] 
            py-[5px]
            cursor-pointer
          "
        >
          <span className="text-[12px]">Select by</span> 
          <IoIosArrowDown size={16} />
          { 
            openDropdown 
            && 
            <div 
              className="
                absolute
                w-[136px] 
                h-[164px]
              bg-white
                rounded-[4px] 
                border 
                border-[#0071E3]
                z-10
                top-[29px]
                right-0
                text-[12px] font-medium
                grid grid-cols-1 gap-4
                p-4
              "
            >
              <div className="flex items-center gap-4 z-30">
                <p className="w-[20px] h-[20px] rounded-full border border-[#0071E3]"></p>
                <p>All</p>
              </div>

              <div className="flex items-center gap-2 z-30">
                <p className="w-[20px] h-[20px] rounded-full bg-[#0071E3] "></p>
                <p>Individual</p>
              </div>
              
              <div className="flex items-center gap-2 z-30">
                <p className="w-[20px] h-[20px] rounded-full border border-[#0071E3]"></p>
                <p>Soldiers</p>
              </div>

              <div className="flex items-center gap-2 z-30">
                <p className="w-[20px] h-[20px] rounded-full border border-[#0071E3] "></p>
                <p>Pets</p>
              </div>
            </div>
          }
        </div>
      </div>
      { Switch === "user" && <UserStory/>}
      { Switch === "req" && <StoryRequest/>}
      

      {/* <div
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 justify-end mb-3 cursor-pointer text-primary"
      >
        <IconPlus />
        <p>Add Worker</p>
      </div>
      <div className="rounded-md p-4   bg-white">
        <HeadingText>Workers List</HeadingText>
        <div className="mt-5">
          <WorkersTable />
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <form className="w-full">
          <InputField
            placeholder="Name"
            iconType={<IconUser color="#333333" size={20} />}
          />
          <InputField
            placeholder="Email"
            iconType={<IconMail color="#333333" size={20} />}
          />
          <InputField
            placeholder="Phone number"
            iconType={<IconPhone color="#333333" size={20} />}
          />
          <InputField
            placeholder="Country"
            iconType={<IconMapPin color="#333333" size={20} />}
          />

          <button
            type="submit"
            className="bg-[#b278fb]
         text-white mt-10 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
          >
            Add Worker
          </button>
        </form>
      </Modal> */}
    </>
  );
};

export default Workers;
