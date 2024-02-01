import TransactionsTable from "../../components/Transactions/TransactionsTable";
import HeadingText from "../../util/HeadingText";
import TransactionStatus from "../../util/TransactionStatus";

const Transactions = () => {
  return (
    <>
      <TransactionStatus />
      <div className="rounded-md p-4 mt-4  bg-white">
        <HeadingText>Transactions</HeadingText>
        <div className="mt-3">
          <TransactionsTable />
        </div>
      </div>
    </>
  );
};

export default Transactions;
