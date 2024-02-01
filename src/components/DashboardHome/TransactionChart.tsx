import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  {
    name: "Jan",
    amount: 4000,
  },
  {
    name: "Fab",
    amount: 3000,
  },
  {
    name: "Mar",
    amount: 2000,
  },
  {
    name: "Apr",
    amount: 2780,
  },
  {
    name: "May",
    amount: 2780,
  },
  {
    name: "Jun",
    amount: 1890,
  },
  {
    name: "July",
    amount: 2390,
  },
  {
    name: "Aug",
    amount: 3490,
  },
  {
    name: "Sep",
    amount: 1890,
  },
  {
    name: "Oct",
    amount: 2390,
  },
  {
    name: "Nov",
    amount: 2390,
  },
  {
    name: "Dec",
    amount: 3490,
  },
];

const TransactionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} syncId="anyId">
        <Tooltip />
        <XAxis dataKey="name" />
        <Bar dataKey="amount" fill="#b278fb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionChart;
