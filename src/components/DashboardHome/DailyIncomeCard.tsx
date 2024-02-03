import { HiUserGroup } from "react-icons/hi"
import { CiWallet } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";

const DailyIncomeCard = () => {
    const subscription = [
        {
            name: "Total",
            total : 2520,
            icon: <CiWallet color="#0071E3" size={36}/>
        },
        {
            name: "Daily",
            total : 2520,
            icon: <BsCashStack color="#0071E3" size={36}/>
        },
        {
            name: "Weekly",
            total : 1824,
            icon: <BsCashStack color="#0071E3" size={36}/>
        },
        {
            name: "Monthly",
            total : 1023,
            icon: <BsCashStack color="#0071E3" size={36}/>
        }
    ]
    return (
        <div className='flex items-center justify-between'>
            {
                subscription.map((item, index)=>
                    <div 
                        key={index} 
                        className='
                            bg-white 
                            w-[239px] 
                            h-[117px] 
                            rounded-[16px] 
                            flex 
                            items-center 
                            justify-center
                            mb-[44px]
                        '
                    >
                        <div className='flex items-center gap-4'>
                            <div 
                                className='
                                    bg-[#E6F1FC] 
                                    p-[14px] 
                                    rounded-full 
                                    flex
                                    items-center 
                                    justify-center
                                '
                            >
                                {item.icon}
                            </div>
                            <div className=''>
                                <h3 className='text-[#0071E3] font-medium text-[16px]'>{item.name} Income</h3>
                                <h1 className='font-medium text-[30px]'>${item.total}</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DailyIncomeCard