import { useEffect, useState } from "react";
import UsersTable from "../../components/Users/UsersTable";
import HeadingText from "../../util/HeadingText";
import SearchField from "../../util/SearchField";
import { IoIosArrowDown } from "react-icons/io";
import UserSubsciptionDetailsCard from "../../components/DashboardHome/UserSubsciptionDetailsCard";
import Header from "../../layouts/Main/Header";
import { AllUser } from "../../redux/apiSlices/allUserSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { searchUser } from "../../redux/apiSlices/searchUserSlice";

const Users = () => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state => state.allUser);
  const {users: search} = useAppSelector(state => state.searchUser);
  const [searchText, setSearchText] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);

  console.log(users)
  console.log(search)

  useEffect(()=> {
    dispatch(AllUser())
  },[dispatch]);

  useEffect(()=>{
    if(searchText !== ''){
      dispatch(searchUser(searchText))
    }
  },[dispatch, searchText])
  
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
                  w-[96px] 
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
                <p className="text-[#2B2A2A] pb-2">Basic</p>
                <p className="text-[#0071E3] pb-2">Premium</p>
                <p className="text-[#E8B40A]">Gold</p>
              </div>
            }
          </div>
        </div>
        <div className="mt-5">
          <UsersTable />
        </div>
      </div>
    </>
  );
};

export default Users;
