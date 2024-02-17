import TransactionsTable from "../../components/Transactions/TransactionsTable";
import Header from "../../layouts/Main/Header";
import DailyIncomeCard from "../../components/DashboardHome/DailyIncomeCard";
import TransactionsTableHeading from "../../components/Transactions/TransactionsTableHeading";
import WeeklyIncomeTable from "../../components/Transactions/WeeklyIncomeTable";
import MonthlyIncomeTable from "../../components/Transactions/MonthlyIncomeTable";
import { useState } from "react";

const Transactions = () => {
  const [change, setChange] = useState<string>("Daily");
  return (
    <>
      <div className="flex items-end justify-end gap-4 mb-6">
        <Header/>
      </div>
      <DailyIncomeCard />
      <div className="rounded-md p-4 mt-4  bg-white">
        <TransactionsTableHeading setChange={setChange} />
        <div className="mt-3">
          { change === "Daily" &&  <TransactionsTable /> }
          { change === "Monthly" &&  <MonthlyIncomeTable /> }
          { change === "Weekly" &&  <WeeklyIncomeTable />}
        </div>
      </div>
    </>
  );
};

export default Transactions;
