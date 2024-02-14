import photo from "../../assets/Rectangle.png";
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { storyRequest } from "../../redux/apiSlices/story/storyRequestSlice";
import { storyStatus } from "../../redux/apiSlices/story/storyStatusSlice";
import { IStory } from "../../types/story.interface";
const StoryRequest = () => {
    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch();
    const {story} = useAppSelector(state => state.storyRequest);
    useEffect(()=>{
        dispatch(storyRequest(page));
    },[dispatch, page]);

    const handleStoryStatus=(id: number)=>{
        dispatch(storyStatus({id: id, status: 1 as number}));
        dispatch(storyRequest(page));
    }

     
    return (
        <div>
            <div className={`my-6 ${ story?.data?.length > 5 ? "overflow-y-scroll h-[650px]" : null}`}>
                <div className="grid grid-cols-1 gap-6 ">
                    {
                        story?.data?.map((story: IStory, index: number)=>(
                        <div key={index} className="flex items-center justify-between w-full bg-white rounded-lg p-2 h-[116px]">
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
                                <button onClick={()=>handleStoryStatus(story.id)} className={`w-[157px] h-[36px] rounded-lg bg-[#0071E3] text-white `}>Accept</button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Pagination 
                    total={story?.total} 
                    pageSize={story?.per_page}
                    current={story?.current_page}
                    onChange={(page)=> setPage(page)} 
                /> 
            </div>
        </div>
    )
}

export default StoryRequest