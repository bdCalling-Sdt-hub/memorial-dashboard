import { FaCircleCheck } from "react-icons/fa6"
import { IoIosArrowRoundForward } from "react-icons/io"
import { PiCrownSimpleFill } from "react-icons/pi"
import { Link } from "react-router-dom";
interface SubscriptionPlanCardProps{
    name: string;
    price: string;
    featureValue: string;
    feature: string[];

} 
const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
    name,
    price,
    featureValue,
    feature
}) => {
    return (
        <div 
            className="
                w-[370px] 
                h-[500px] 
                mt-11 
                px-6 
                pt-11 
                bg-white 
                rounded-xl 
                shadow-[#50d71e] 
                border
            "
        >
            <div className="flex items-center justify-center gap-[10px]">
                <PiCrownSimpleFill size={32} color="#FFC60B" /> <span className="text-[34px] font-semibold">{name}</span>
            </div>
            <h1 className="text-[#0071E3] text-center text-6 font-semibold">${price}/Month</h1>
            <h1 className="text-[#0071E3] text-center text-6 font-semibold">{featureValue}</h1>
            <div className="mt-[23px]">
                {
                    feature?.map((item, index)=>
                    <div key={index} className="flex items-center gap-[10px] mb-4">
                        <FaCircleCheck size={24} color="#0071E3"/>
                        <p className="text-[#0071E3]">{item}</p>
                    </div>
                    )
                }
                <div className="flex items-center justify-center">
                    <Link to="/edit-subscription">
                        <button 
                            className="
                                w-[200px] 
                                h-[59px] 
                                bg-[#0071E3] 
                                text-[18px] 
                                font-normal 
                                flex 
                                items-center 
                                justify-center 
                                gap-[10px] 
                                text-white 
                                rounded-md
                            "
                        > 
                            Edit Plan
                            <IoIosArrowRoundForward size={24} color="#FFFFFF" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPlanCard