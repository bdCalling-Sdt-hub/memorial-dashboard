import { useEffect, useState } from "react";
import UsersTable from "../../components/Users/UsersTable";
import HeadingText from "../../util/HeadingText";
import SearchField from "../../util/SearchField";
import { IoIosArrowDown } from "react-icons/io";
import UserSubsciptionDetailsCard from "../../components/DashboardHome/UserSubsciptionDetailsCard";
import Header from "../../layouts/Main/Header";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { allPackage } from "../../redux/apiSlices/subscription/getPackageSlice";

const Users = () => {
  const dispatch = useAppDispatch();
  const {packages} = useAppSelector(state => state.getPackage);
  const [searchText, setSearchText] = useState('');
  const [selectPackage, setSelectPackage] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(()=> {
    dispatch(allPackage())
  },[dispatch]);

  
  
  return (
    <>
      <div className="flex items-end justify-end gap-4 mb-6">
        
        <SearchField
          placeholder="Search users"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Header/>
      </div>
      <UserSubsciptionDetailsCard />
      <div className="rounded-md p-4  bg-white">
        <div className="flex items-center gap-4">
          <HeadingText>User List</HeadingText>
          <div 
            onClick={()=>setOpenDropdown(!openDropdown)} 
            className="
              text-[#0071E3] 
              relative  
              w-fit 
              border 
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
            <span className="text-[12px]">Sort by</span> 
            <IoIosArrowDown size={16} />
            { 
              openDropdown 
              && 
              <div 
                className="
                  absolute
                  w-[110px] 
                  h-[94px]
                bg-white
                  rounded-b-[16px] 
                  border 
                  border-[#0071E3]
                  z-10
                  top-[29px]
                  left-0
                  text-[12px] font-medium
                  p-3
                "
              >
                {
                  packages?.map((item) =>
                    <div key={item?.id}>
                      <p 
                        onClick={()=>setSelectPackage(item?.id)}
                        className={`
                          pb-2 cursor-pointer
                          ${item?.package_name === "Quater Page" ? "text-[#2B2A2A]" :  item?.package_name === "Half Page" ? "text-[#0071E3]" : "text-[#E8B40A]"}
                          
                        `}
                      >
                        {item?.package_name}
                      </p>
                    </div>
                  )
                }
                
              </div>
            }
          </div>
        </div>
        <div className="mt-5">
          <UsersTable searchText={searchText} selectPackage={selectPackage} />
        </div>
      </div>
    </>
  );
};

export default Users;
