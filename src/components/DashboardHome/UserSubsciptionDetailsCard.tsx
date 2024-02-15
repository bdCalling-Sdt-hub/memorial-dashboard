import { HiUserGroup } from "react-icons/hi";
import { IUser } from "../../types/user.interface";
import { useAppSelector } from "../../redux/hook";



const UserSubsciptionDetailsCard= () => {
    const {users, packeages} = useAppSelector(state => state.allUser);
    return (
        <div className='flex items-center justify-between'>
            {
                packeages.slice().reverse().map((item, index)=>
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
                                <h3 className='text-[#0071E3] font-medium text-[16px]'>{item?.package_name}</h3>
                                <h1 className='font-medium text-[30px]'>{item?.story_count}</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserSubsciptionDetailsCard