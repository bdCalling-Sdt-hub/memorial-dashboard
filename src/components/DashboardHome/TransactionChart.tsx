import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { getIncomeRation } from "../../redux/apiSlices/income/getIncomeRatioSlice";

interface TransactionChartProps{
  year: number;
}


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
