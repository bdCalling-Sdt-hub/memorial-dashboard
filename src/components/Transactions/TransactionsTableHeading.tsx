import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import HeadingText from "../../util/HeadingText"
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { allPackage } from "../../redux/apiSlices/subscription/getPackageSlice";
interface  TransactionsTableHeadingProps{
  setChange : ()=> void;
  setSelectPackage : ()=> void;
}

const TransactionsTableHeading:React.FC<TransactionsTableHeadingProps> = ({
  setChange,
  setSelectPackage
}) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [Switch, setSwitch] = useState("Daily") ;
    const handleChange=(e:string)=>{
      setChange(e)
      setSwitch(e);
    }

    useEffect(()=>{
      window.history.pushState(
        null,
        "",
        `?${Switch}`
      )
    }, [Switch]);


    const dispatch = useAppDispatch();
    const {packages} = useAppSelector(state => state.getPackage);
    useEffect(()=> {
      dispatch(allPackage())
    },[dispatch]);

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <HeadingText>Transactions</HeadingText>
              <div 
                onClick={()=>setOpenDropdown(!openDropdown)} 
                className="
                  text-[#0071E3] 
                  relative  
                  w-fit 
                  border 
                  border-[#0071E3] 
                  rounded-[4px] 
                  flex 
                  items-center 
                  gap-2 
                  px-[9px] 
                  py-[5px]
                  cursor-pointer
                "
              >
                <span className="text-[12px]">Sort by</span> 
                <IoIosArrowDown size={16} />
                { 
                  openDropdown 
                  && 
                  <div 
                    className="
                      absolute
                      w-[110px] 
                      h-[94px]
                    bg-white
                      rounded-b-[16px] 
                      border 
                      border-[#0071E3]
                      z-10
                      top-[29px]
                      left-0
                      text-[12px] font-medium
                      p-3
                    "
                  >
                    {
                        packages?.map((item) =>
                          <div key={item?.id}>
                            <p 
                              onClick={()=>setSelectPackage(item?.id)}
                              className={`
                                pb-2 cursor-pointer
                                ${item?.package_name === "Quater Page" ? "text-[#2B2A2A]" :  item?.package_name === "Half Page" ? "text-[#0071E3]" : "text-[#E8B40A]"}
                                
                              `}
                            >
                              {item?.package_name}
                            </p>
                          </div>
                        )
                    }
                  </div>
                }
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={()=>handleChange("Daily")} className={`w-[120px] h-[36px] rounded-lg  border ${Switch === "Daily" ? "bg-[#0071E3] text-white" : "border-[#0071E3] text-[#0071E3]"} `}>Daily</button>
              <button onClick={()=>handleChange("Weekly")} className={`w-[120px] h-[36px] rounded-lg  border ${Switch === "Weekly" ? "bg-[#0071E3] text-white" : "border-[#0071E3] text-[#0071E3]"} `}>Weeky</button>
              <button onClick={()=>handleChange("Monthly")} className={`w-[120px] h-[36px] rounded-lg  border ${Switch === "Monthly" ? "bg-[#0071E3] text-white" : "border-[#0071E3] text-[#0071E3]"} `}>Monthly</button>
              
            </div>
          </div>
    )
}

export default TransactionsTableHeading