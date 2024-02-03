import { useState } from "react";
import TransactionsTable from "../../components/Transactions/TransactionsTable";
import HeadingText from "../../util/HeadingText";
import SearchField from "../../util/SearchField";
import TransactionStatus from "../../util/TransactionStatus";
import Header from "../../layouts/Main/Header";
import DailyIncomeCard from "../../components/DashboardHome/DailyIncomeCard";
import { IoIosArrowDown } from "react-icons/io";
import TransactionsTableHeading from "../../components/Transactions/TransactionsTableHeading";

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
        <TransactionsTableHeading/>
        <div className="mt-3">
          <TransactionsTable />
        </div>
      </div>
    </>
  );
};

export default Transactions;
