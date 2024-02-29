import TransactionsTable from "../../components/Transactions/TransactionsTable";
import Header from "../../layouts/Main/Header";
import DailyIncomeCard from "../../components/DashboardHome/DailyIncomeCard";
import TransactionsTableHeading from "../../components/Transactions/TransactionsTableHeading";
import WeeklyIncomeTable from "../../components/Transactions/WeeklyIncomeTable";
import MonthlyIncomeTable from "../../components/Transactions/MonthlyIncomeTable";
import { useState } from "react";

const Transactions = () => {
  const [change, setChange] = useState<string>("Daily");
  const [selectPackage, setSelectPackage] = useState<number>();
  return (
    <>
      <div className="flex items-end justify-end gap-4 mb-6">
        <Header/>
      </div>
      <DailyIncomeCard />
      <div className="rounded-md p-4 mt-4  bg-white">
        <TransactionsTableHeading setSelectPackage={setSelectPackage} setChange={setChange} />
        <div className="mt-3">
          { change === "Daily" &&  <TransactionsTable selectPackage={selectPackage} /> }
          { change === "Monthly" &&  <MonthlyIncomeTable  selectPackage={selectPackage} /> }
          { change === "Weekly" &&  <WeeklyIncomeTable selectPackage={selectPackage} />}
        </div>
      </div>
    </>
  );
};

export default Transactions;
