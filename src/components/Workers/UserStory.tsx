import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getStories } from "../../redux/apiSlices/story/getStoriesSlice";
import { IStory } from "../../types/story.interface";
import moment from "moment";
import ImgConfig from "../../ImgConfig"
import Spinner from "../Spinner";

const UserStory = ({selectedCategory}: {selectedCategory: number}) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1)
  const {stories, loading} = useAppSelector(state => state.getStories);
  useEffect(()=>{
    dispatch(getStories({selectedCategory, page}));
  },[dispatch, selectedCategory, page]);
  
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
            <div className="grid grid-cols-2 gap-4 my-6">
          {
            stories?.data?.map((story: IStory, index:number)=>(
              <Link key={index} to={`/workers/story-details/${story.id}`}>
                <div  className="flex items-center gap-6 w-full bg-white rounded-lg p-2">
                    <img src={`${ImgConfig}${story?.story_image[0]}`}  style={{width: "100px", height: "100px", borderRadius: "8px"}} alt="" />
                    <div>
                      <h3 className="text-[18px] font-medium">{story?.description.slice(0, 40)}  ...</h3>
                      <h4 className="text-[14px] font-normal">{moment(story.created_at).format('LT')}</h4>
                      <h4 className="text-[14px] font-normal">{story?.death_date}</h4>
                    </div>
                </div>
              </Link>
            ))
          }
          </div>
          <div className="flex items-center justify-center">
          <Pagination 
            total={stories?.total} 
            pageSize={stories?.per_page}
            current={stories?.current_page}
            onChange={(page)=> setPage(page)}
          /> 
          </div>
          </div>
        }
      </>
        
    )
}

export default UserStory