import TransactionsTable from "../../components/Transactions/TransactionsTable";
import Header from "../../layouts/Main/Header";
import DailyIncomeCard from "../../components/DashboardHome/DailyIncomeCard";
import TransactionsTableHeading from "../../components/Transactions/TransactionsTableHeading";

const Transactions = () => {
  return (
    <>
      <div className="flex items-end justify-end gap-4 mb-6">
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
