import img2 from "../assets/hat.png";
import img1 from "../assets/write.png";
import img3 from "../assets/dog.png";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { getDashboard } from "../redux/apiSlices/getDashboardSlice";

const TransactionStatus = () => {
  const dispatch = useAppDispatch();
  const {packeages} = useAppSelector(state=> state.getDashboard);
  useEffect(()=>{
    dispatch(getDashboard());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-3 gap-5">
      {packeages?.map((item, index) => (
        <div
          key={index}
          className="bg-white h-[79px] flex items-center justify-center p-5 rounded-lg gap-5 text-center"
        >
          { item?.category_name === "Veteran" &&   <img width={44} height={44} src={img2} alt="" />}
          { item?.category_name === "Pets" &&   <img width={44} height={44} src={img3} alt="" />}
          { item?.category_name === "Individuals" &&   <img width={44} height={44} src={img1} alt="" />}
          {/* <img width={44} height={44} src={item.img} alt="" /> */}
          <div>
            <p className="text-[14px] text-[#555555]">{item?.category_name}</p>
            <h2 className="font-bold text-[30px]">{item?.story_count}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionStatus;
