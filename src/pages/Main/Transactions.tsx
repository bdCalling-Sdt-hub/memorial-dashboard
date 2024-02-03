import { useState } from "react";
import TransactionsTable from "../../components/Transactions/TransactionsTable";
import HeadingText from "../../util/HeadingText";
import SearchField from "../../util/SearchField";
import TransactionStatus from "../../util/TransactionStatus";
import Header from "../../layouts/Main/Header";
import DailyIncomeCard from "../../components/DashboardHome/DailyIncomeCard";
import { IoIosArrowDown } from "react-icons/io";

const Transactions = () => {
  const [searchText, setSearchText] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false) 
  return (
    <>
      <div className="flex items-end justify-end gap-4 mb-6">
        <SearchField
          placeholder="Search users"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Header/>
      </div>
      <DailyIncomeCard />
      <div className="rounded-md p-4 mt-4  bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <HeadingText>Transactions</HeadingText>
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
            <div className="flex items-center gap-3">
              <button className="w-[120px] h-[36px] rounded-lg text-white border bg-[#0071E3] border-[#0071E3]">Daily</button>
              <button className="w-[120px] h-[36px] rounded-lg border border-[#0071E3]">Weekly</button>
              <button className="w-[120px] h-[36px] rounded-lg border border-[#0071E3]">Monthly</button>
            </div>
          </div>
        <div className="mt-3">
          <TransactionsTable />
        </div>
      </div>
    </>
  );
};

export default Transactions;
