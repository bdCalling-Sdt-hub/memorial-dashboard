import Header from "../../layouts/Main/Header"
import HeadingText from "../../util/HeadingText"
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";

const EditSubscription = () => {
    const [count, setCount] = useState(4);
    const handleAddCount=()=>{
        setCount(count + 1)
    }
    return (
        <div>
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>
            <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Edit Subscriptions</HeadingText>
            <div className="bg-white rounded-2xl p-6 mt-6 h-full">

                {/* package information start */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-lg font-normal text-[#0071E3] mb-4">Package Name</p>
                            <input type="text" className="pl-4 h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full" placeholder="Basic" />
                        </div>
                        <div>
                            <p className="text-lg font-normal text-[#0071E3] mb-4">Package Amount</p>
                            <input type="text" className="pl-4 h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full" placeholder="Basic" />
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-normal text-[#0071E3] mb-4">Package Expiration</p>
                        <input type="text" className=" pl-4 h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full" placeholder="Basic" />
                    </div>
                </div>
                {/* package information start */}

                {/* divider */}

                <div className="w-full h-[1px] bg-[#0071E3] my-6"></div>

                {/* package feature */}
                <p className="text-lg font-normal text-[#0071E3] mb-4">Package Name</p>

                <div className="grid grid-cols-1 gap-4">
                    {
                        [...Array(count)].map((index)=>(
                            <div key={index} className="flex items-center gap-6 w-full">
                                <input type="text" className=" pl-4 h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full relative"  placeholder="Basic" />
                                <AiOutlineMinusCircle  size={33} color="#D7263D" />
                            </div>
                        ))
                    }
                </div>
                <div onClick={handleAddCount} className="h-[56px] mt-4 w-[95.5%] bg-[#0071E3] text-white rounded-lg flex items-center justify-center text-lg font-semibold">
                    Add Feature
                </div>
            </div>
        </div>
    )
}

export default EditSubscription