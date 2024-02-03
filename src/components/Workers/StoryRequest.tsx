import photo from "../../assets/Rectangle.png";
import { Pagination } from 'antd';
const StoryRequest = () => {
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
          return <a>Previous</a>;
        }
        if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
    };
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 my-6 overflow-y-scroll h-[650px]">
                {
                [...Array(10)].map((index)=>(
                    <div key={index} className="flex items-center justify-between w-full bg-white rounded-lg p-2">
                        <div className="flex items-center gap-2">
                            <img src={photo} width={100} height={100} alt="" />
                            <div>
                                <h3 className="text-[18px] font-medium">We helped our father write his last story</h3>
                                <h4 className="text-[14px] font-normal">5:25 pm</h4>
                                <h4 className="text-[14px] font-normal">24 Dec, 2023</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className={`w-[157px] h-[36px] rounded-lg  border border-[#0071E3] text-[#0071E3] `}>Reject</button>
                            <button className={`w-[157px] h-[36px] rounded-lg bg-[#0071E3] text-white `}>Accept</button>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="flex items-center justify-center">
                <Pagination total={500} itemRender={itemRender}/> 
            </div>
        </div>
    )
}

export default StoryRequest