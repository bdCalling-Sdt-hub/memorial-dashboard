import img2 from "../assets/Approved transaction.png";
import img1 from "../assets/Black.svg";
import img3 from "../assets/Pending Transaction.png";

const TransactionStatus = () => {
  const status = [
    {
      img: img1,
      title: "Total Transaction",
      amount: 540,
    },
    {
      img: img2,
      title: "Approved",
      amount: 200,
    },
    {
      img: img3,
      title: "Pending",
      amount: 300,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      {status.map((item, index) => (
        <div
          key={index}
          className="bg-white flex items-center justify-center p-10 rounded-lg gap-5 text-center"
        >
          <img className="w-16 h-16" src={item.img} alt="" />
          <div>
            <p className="text-lg">{item.title}</p>
            <h2 className="font-bold text-2xl">{item.amount}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionStatus;
