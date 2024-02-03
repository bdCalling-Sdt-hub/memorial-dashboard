import {
  IconEdit,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import InputField from "../../util/InputField";
import ModelValue from "../../util/ModelValue";
import Header from "../../layouts/Main/Header";
import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import person from "../../assets/Ellipse 610.png"
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

interface IProfile {
  isProfileEdit?: boolean;
  setIsProfileEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<IProfile> = ({ isProfileEdit, setIsProfileEdit }) => {
  return (
    <div>
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
      <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Profile</HeadingText>
      <div className="mt-6 bg-white rounded-xl  h-[calc(100vh-40px)] px-[104px] py-[84px] border">
        
          {/* Banner */}
          <div className="h-[208px] bg-[#0071E3] rounded-xl py-8 px-6 mb-6 flex items-center gap-[54px]">
              <img src={person} width={144} height={144} alt="" />
              <div className="text-[#FFFFFF]">
                <h1 className="text-3xl font-medium ">Bruce Matthews</h1>
                <p className="text-lg font-medium pt-[12px]">Admin</p>

                <Link to="/settings/edit-profile">
                  <button 
                    className="
                      mt-4
                      w-[200px] 
                      text-base 
                      font-semibold 
                      h-[44px] 
                      bg-white 
                      text-[#0071E3] 
                      rounded-lg
                    "
                  >
                    Edit Profile
                  </button>
                </Link>
              </div>
          </div>
        
        {/* information section */}
        <HeadingText> Personal Information</HeadingText>
        <div className="grid grid-cols-1 gap-4 mt-[15px]">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E6F1FC]">
              <CiUser size={24} color="#0071E3" />
            </div>
            <p className="text-xl font-normal">Bruce Matthews</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E6F1FC]">
              <HiOutlineMail size={24} color="#0071E3" />
            </div>
            <p className="text-xl font-normal">bruce.07@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E6F1FC]">
              <IoCallOutline size={24} color="#0071E3" />
            </div>
            <p className="text-xl font-normal">(480) 555-0103</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E6F1FC]">
              <CiLocationOn size={24} color="#0071E3" />
            </div>
            <p className="text-xl font-normal">3517 W. Gray St. Utica, Pennsylvania 57867</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
