import Header from "../../layouts/Main/Header";
import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import person from "../../assets/Ellipse 610.png"
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { getProfile } from "../../redux/apiSlices/authentication/getProfileSlice";

interface IProfile {
  isProfileEdit?: boolean;
  setIsProfileEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<IProfile> = () => {
  const dispatch = useAppDispatch();
  const {profile} = useAppSelector(state=> state.getProfile);
  console.log(profile)
  
  useEffect(()=>{
    dispatch(getProfile())
  },[dispatch]);
  return (
    <div>
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
      <Link to="/">
        <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Profile</HeadingText>
      </Link>
      <div className="mt-6 bg-white rounded-xl  h-[728px] px-[104px] py-[84px] border">
        
          {/* Banner */}
          <div className="h-[208px] bg-[#0071E3] rounded-xl py-8 px-6 mb-6 flex items-center gap-[54px]">
              <img src={profile?.image ? profile?.image : person} width={144} height={144} alt="" />
              <div className="text-[#FFFFFF]">
                {/* user name */}
                <h1 className="text-3xl font-medium ">{profile?.fullName}</h1>
                <p className="text-lg font-medium pt-[12px]">{profile?.userType}</p>

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

            {/* user name */}
            <p className="text-xl font-normal">{profile?.fullName}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E6F1FC]">
              <HiOutlineMail size={24} color="#0071E3" />
            </div>

            {/* user email */}
            <p className="text-xl font-normal">{profile?.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E6F1FC]">
              <IoCallOutline size={24} color="#0071E3" />
            </div>

            {/* user phone number */}
            <p className="text-xl font-normal">{profile?.mobile ? profile?.mobile : "017569845"}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#E6F1FC]">
              <CiLocationOn size={24} color="#0071E3" />
            </div>

            {/* user address */}
            <p className="text-xl font-normal">{profile?.address ? profile?.address : "3517 W. Gray St. Utica, Pennsylvania 57867"}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
