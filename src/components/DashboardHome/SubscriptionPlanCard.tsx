import { FaCircleCheck } from "react-icons/fa6"
import { IoIosArrowRoundForward } from "react-icons/io"
import { PiCrownSimpleFill } from "react-icons/pi"
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { deleteSubscription } from "../../redux/apiSlices/subscription/deleteSubscriptionSlice";
interface SubscriptionPlanCardProps{
    name: string;
    price: string;
    feature?: string[];
    id: number;
    handleDelete: ()=> void;
    word_limit: number;
    image_limit: number;
    item: {};
} 
const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
    name,
    price,
    feature,
    id,
    handleDelete,
    word_limit,
    image_limit,
    item
}) => {
    const dispatch = useAppDispatch();
    const {subscription} = useAppSelector(state=> state.deleteSubscription);
    const word =  {"feature": `Post Story in between ${word_limit} words`}
    
    const handleId=(id:number)=>{
        if(id){
            handleDelete(id);
            // dispatch(deleteSubscription(id));
        }
    }
    const handleSave=(item)=>{
        localStorage.setItem("subscription", JSON.stringify(item));
    }
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
            <h1 className="text-[#0071E3] text-center  text-[30px] font-semibold">{image_limit} Photo Stories</h1>
            <div className="mt-[23px]">
                {
                    [...JSON.parse(feature),  word]?.map((item:any, index)=>
                    <div key={index} className="flex items-center gap-[10px] mb-4">
                        <FaCircleCheck size={24} color="#0071E3"/>
                        <p className="text-[#0071E3]">{item?.feature}</p>
                    </div>
                    )
                }

                <div className="flex items-center gap-4 justify-between">
                    <Link to={`/edit-subscription/${id}`} >
                        <button
                            onClick={()=>handleSave(item)} 
                            className="
                                w-[164px]
                                h-[36px] 
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
                    <button
                        onClick={()=>handleId(id)}
                        className="
                            w-[164px]
                            h-[36px]
                            border 
                            border-[#0071E3] 
                            text-[18px] 
                            font-normal 
                            flex 
                            items-center 
                            justify-center 
                            gap-[10px] 
                            text-[#0071E3] 
                            rounded-md
                        "
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPlanCard