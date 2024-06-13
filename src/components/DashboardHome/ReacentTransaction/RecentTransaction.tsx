
import { Link } from "react-router-dom";
import HeadingText from "../../../util/HeadingText";
import TransactionTable from "./TransactionTable";

const RecentTransaction = () => {
  
  return (
    <div className="rounded-[12px] h-[400px] border p-4 mt-4  bg-white">
      <div className="flex items-center justify-between">
        <HeadingText>Recent Transactions</HeadingText>
        <Link to="/transactions">
          <p className="font-normal text-[#0071E3]">See All</p>
        </Link>
      </div>
      <div className="mt-3">
        <TransactionTable />
      </div>
    </div>
  );
};

export default RecentTransaction;
