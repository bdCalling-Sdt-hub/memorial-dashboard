import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import HeadingText from "../../util/HeadingText"


const TransactionsTableHeading = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [Switch, setSwitch] = useState("Daily") ;
    const handleChange=(e:string)=>{
        setSwitch(e)
    }
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
                      w-[96px] 
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
                    <p className="text-[#2B2A2A] pb-2">Basic</p>
                    <p className="text-[#0071E3] pb-2">Premium</p>
                    <p className="text-[#E8B40A]">Gold</p>
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