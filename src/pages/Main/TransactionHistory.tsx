import TransactionHistoryTable from "../../components/TransactionHistory/TransactionHistoryTable";
import HeadingText from "../../util/HeadingText";
import TransactionStatus from "../../util/TransactionStatus";

const TransactionHistory = () => {
  return (
    <>
      <TransactionStatus />
      <div className="rounded-md p-4 mt-4  bg-white">
        <HeadingText>Transactions</HeadingText>
        <div className="mt-3">
          <TransactionHistoryTable />
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
