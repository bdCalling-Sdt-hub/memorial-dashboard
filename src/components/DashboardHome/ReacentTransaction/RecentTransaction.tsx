import HeadingText from "../../../util/HeadingText";
import TransactionTable from "./TransactionTable";

const RecentTransaction = () => {
  return (
    <div className="rounded-[12px] h-[450px] border p-4 mt-4  bg-white">
      <HeadingText>Recent Transactions</HeadingText>
      <div className="mt-3">
        <TransactionTable />
      </div>
    </div>
  );
};

export default RecentTransaction;
