import { useState } from "react";
import UsersTable from "../../components/Users/UsersTable";
import HeadingText from "../../util/HeadingText";
import SearchField from "../../util/SearchField";
import { IoIosArrowDown } from "react-icons/io";

const Users = () => {
  const [searchText, setSearchText] = useState(""); 
  console.log(searchText);
  return (
    <>
      <SearchField
        placeholder="Search by name/email/phone number"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="rounded-md p-4  bg-white">
        <div className="flex items-center gap-4">
          <HeadingText>User List</HeadingText>
          <div className="text-[#0071E3] w-fit border border-[#0071E3] rounded-[4px] flex items-center gap-2 px-[9px] py-[5px]">
            <span className="text-[12px]">Sort by</span> 
            <IoIosArrowDown size={16} />
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
