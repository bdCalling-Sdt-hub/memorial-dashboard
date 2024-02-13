import { HiUserGroup } from "react-icons/hi";
import { IUser } from "../../types/user.interface";
import { useAppSelector } from "../../redux/hook";



const UserSubsciptionDetailsCard= () => {
    const {users} = useAppSelector(state => state.allUser);
    const basic = (users as unknown as IUser[]).filter((p:IUser) => p?.package?.package_name === "Quater Page");
    const premium = (users as unknown as IUser[]).filter((p:IUser) => p?.package?.package_name === "Half Page");
    const gold = (users as unknown as IUser[]).filter((p:IUser) => p?.package?.package_name === "Full Page");
    const subscription = [
        {
            name: "Total",
            total : users?.length,
        },
        {
            name: "Basic",
            total : basic?.length,
        },
        {
            name: "Premium",
            total : premium?.length,
        },
        {
            name: "Golden",
            total : gold?.length,
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
                                <HiUserGroup className='text-[#0071E3]' size={36} />
                            </div>
                            <div className=''>
                                <h3 className='text-[#0071E3] font-medium text-[16px]'>{item.name} Users</h3>
                                <h1 className='font-medium text-[30px]'>{item.total}</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserSubsciptionDetailsCard