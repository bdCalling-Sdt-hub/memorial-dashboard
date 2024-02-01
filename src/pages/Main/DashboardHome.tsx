import RecentTransaction from "../../components/DashboardHome/ReacentTransaction/RecentTransaction";
import TransactionRatio from "../../components/DashboardHome/TransactionRatio";
import TransactionStatus from "../../util/TransactionStatus";

const DashboardHome = () => {
  return (
    <div>
      <TransactionStatus />
      <TransactionRatio />
      <RecentTransaction />
    </div>
  );
};

export default DashboardHome;
