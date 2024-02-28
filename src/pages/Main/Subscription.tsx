import Header from "../../layouts/Main/Header"
import HeadingText from "../../util/HeadingText";
import SubscriptionPlanCard from "../../components/DashboardHome/SubscriptionPlanCard";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { allPackage } from "../../redux/apiSlices/subscription/getPackageSlice";
import { ISubscription } from "../../types/subscription.interface";
import { deleteSubscription } from "../../redux/apiSlices/subscription/deleteSubscriptionSlice";

const Subscription = () => {
    const dispatch = useAppDispatch();
    const { packages } = useAppSelector(state=> state.getPackage);

    useEffect(()=>{
        dispatch(allPackage());
    }, [dispatch]);


    const handleDelete=(id:number)=>{
        if(id){
            dispatch(deleteSubscription(id));
            dispatch(allPackage());
        }
    }
    
    return (
        <div className="">
            {/* user menu */}
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>
            <div className="bg-white h-[950px] rounded-[16px] p-6">
            <HeadingText color="#0071E3"> Subscriptions</HeadingText>

                {/* subscription card */}
                <div className="flex flex-wrap gap-4">
                    {
                        packages?.map((item: ISubscription, index)=>(
                            <SubscriptionPlanCard
                                item={item}
                                handleDelete={handleDelete}
                                id={item?.id}
                                key={index}
                                name={item.package_name}
                                price={item.amount}
                                image_limit={item.image_limit}
                                word_limit={item.word_limit}
                                feature={item.feature}
                            />
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Subscription