import photo from "../../assets/Rectangle.png";
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { storyRequest } from "../../redux/apiSlices/story/storyRequestSlice";
import { storyStatus } from "../../redux/apiSlices/story/storyStatusSlice";
import { IStory } from "../../types/story.interface";
import moment from 'moment';
import Spinner from "../Spinner";
import ImgConfig from "../../ImgConfig"
import { Link } from "react-router-dom";
const StoryRequest = () => {
    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch();
    const {story, loading} = useAppSelector(state => state.storyRequest);
    console.log(story)
    useEffect(()=>{
        dispatch(storyRequest(page));
    },[dispatch, page]);

    const handleStoryStatus=(id: number )=>{
        dispatch(storyStatus({id: id, status: 1}));
        dispatch(storyRequest(page));
    }

    const handleStoryStatusReject=(id: number )=>{
        
        dispatch(storyStatus({id: id, status: 2}));
        dispatch(storyRequest(page));
    }

     
    return (
        <>
            {
                loading
                ?
                <div className="w-full h-[650px] flex items-center justify-center">
                    <Spinner size="large" />
                </div>
                :
            
                <div>
                    <div className={`my-6 ${ story?.data?.length > 5 ? "overflow-y-scroll h-[650px]" : null}`}>
                        <div className="grid grid-cols-1 gap-6 ">
                            {
                                story?.data?.map((item: IStory, index: number)=>(
                                    // <Link key={index} to={`/workers/story-request-details/${item.id}`}
                                        <div key={index} className="flex items-center justify-between w-full bg-white rounded-lg p-2 h-[116px]">
                                            <Link key={index} to={`/workers/story-request-details/${item.id}`}>
                                            <div className="flex items-center gap-6">
                                                {
                                                    item?.story_image
                                                    &&
                                                    <img src={`${ImgConfig}${item?.story_image[0]}` ? `${ImgConfig}${item?.story_image[0]}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} style={{width: "100px", height: "100px", borderRadius: "8px"}}  alt="" />
                                                }
                                                <div>
                                                    <h3 className="text-[18px] mb-[4px] font-medium">{item?.story_title}</h3>
                                                    <h4 className="text-[14px] font-normal">{moment(item?.created_at).format('LT')}</h4>
                                                    <h4 className="text-[14px] font-normal">{item?.death_date}</h4>
                                                </div>
                                            </div>
                                            </Link>
                                            
                                            <div className="flex items-center gap-3">
                                                <button onClick={()=>handleStoryStatusReject(item?.id)} className={`w-[157px] h-[36px] rounded-lg  border border-[#0071E3] text-[#0071E3] `}>Reject</button>
                                                <button onClick={()=>handleStoryStatus(item?.id,)} className={`w-[157px] h-[36px] rounded-lg bg-[#0071E3] text-white `}>Accept</button>
                                            </div>
                                        </div>
                                // </Link>
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
            }
        </>
    )
}

export default StoryRequest