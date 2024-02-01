import img2 from "../assets/Approved transaction.png";
import img1 from "../assets/Black.svg";
import img3 from "../assets/Pending Transaction.png";

const TransactionStatus = () => {
  const status = [
    {
      img: img1,
      title: "Individual Stories",
      amount: 2440,
    },
    {
      img: img2,
      title: "Veteran Stories",
      amount: 2440,
    },
    {
      img: img3,
      title: "Pets Stories",
      amount: 2440,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      {status.map((item, index) => (
        <div
          key={index}
          className="bg-white h-[79px] flex items-center justify-center p-5 rounded-lg gap-5 text-center"
        >
          <img className="w-16 h-16" src={item.img} alt="" />
          <div>
            <p className="text-[14px] text-[#555555]">{item.title}</p>
            <h2 className="font-bold text-[30px]">{item.amount}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionStatus;
