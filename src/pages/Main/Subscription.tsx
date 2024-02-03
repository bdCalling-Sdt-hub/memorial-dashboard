import Header from "../../layouts/Main/Header"
import HeadingText from "../../util/HeadingText";

import SubscriptionPlanCard from "../../components/DashboardHome/SubscriptionPlanCard";

const Subscription = () => {
    const plan = [
        {
            name: "Basic",
            price: "4.99",
            featureValue: "01 Photo Stories",
            feature : [
                "All People Stories",
                "Uniformed Personal Stories  ",
                "Pets Stories",
                "Upload one photo on one story",
                "Post story in between 1000 words",
                "Post 10 stories at a time"
            ]
        },
        {
            name: "Premium",
            price: "9.99",
            featureValue: "02 Photo Stories",
            feature : [
                "All People Stories",
                "Uniformed Personal Stories  ",
                "Pets Stories",
                "Upload one photo on one story",
                "Post story in between 1000 words",
                "Post 10 stories at a time"
            ]
        },{
            name: "Gold",
            price: "14.99",
            featureValue: "Unlimited Photo Stories",
            feature : [
                "All People Stories",
                "Uniformed Personal Stories  ",
                "Pets Stories",
                "Upload one photo on one story",
                "Post story in between 1000 words",
                "Post 10 stories at a time"
            ]
        }

    ]
    return (
        <div className="">
            {/* user menu */}
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>
            <div className="bg-white h-[780px] rounded-[16px] p-6 overflow-y-scroll">
                <HeadingText>Subscriptions</HeadingText>

                {/* subscription card */}
                <div className="flex flex-wrap gap-4">
                    {
                        plan.map((item, index)=>(
                            <SubscriptionPlanCard
                                key={index}
                                name={item.name}
                                price={item.price}
                                featureValue={item.featureValue}
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