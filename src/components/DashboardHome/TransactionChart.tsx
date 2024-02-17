import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { getIncomeRation } from "../../redux/apiSlices/income/getIncomeRatioSlice";

interface TransactionChartProps{
  year: number;
}


const data = [
  {
    name: "1",
    thisMonth: 3000,
    lastMonth: 2500,

  },
  {
    name: "2",
    thisMonth: 4000,
    lastMonth: 2300,
  },
  {
    name: "3",
    thisMonth: 3000,
    lastMonth: 1000,
  },
  {
    name: "4",
    thisMonth: 2000,
    lastMonth: 500,
  },
  {
    name: "5",
    thisMonth: 1000,
    lastMonth: 700,
  },
  {
    name: "6",
    thisMonth: 1500,
    lastMonth: 1000,
  },
  {
    name: "7",
    thisMonth: 1200,
    lastMonth: 800,
  },
  {
    name: "8",
    thisMonth: 1600,
    lastMonth: 700,
  },
  {
    name: "9",
    thisMonth: 1800,
    lastMonth: 1200,
  },
  {
    name: "10",
    thisMonth: 3000,
    lastMonth: 500,
  },
  {
    name: "11",
    thisMonth: 2000,
    lastMonth: 1000,
  },
  {
    name: "12",
    thisMonth: 2000,
    lastMonth: 1000,
  },
  {
    name: "13",
    thisMonth: 2000,
    lastMonth: 1000,
  },
  {
    name: "14",
    thisMonth: 2000,
    lastMonth: 1000,
  },
  {
    name: "15",
    thisMonth: 2000,
    lastMonth: 1000,
  },
];

const TransactionChart: React.FC<TransactionChartProps> = ({year}) => {
  const dispatch = useAppDispatch();
  const {income} = useAppSelector(state=> state.getIncomeRation);

  useEffect(()=>{
    dispatch(getIncomeRation(year));
  }, [dispatch, year]);
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={income} syncId="anyId">
        <XAxis dataKey="month_name" />
        <Bar radius={20} barSize={4.79} dataKey="month_number" fill="#8ABEF2" />
        <Bar radius={20} barSize={4.79} dataKey="month_number" fill="#0071E3" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionChart;
