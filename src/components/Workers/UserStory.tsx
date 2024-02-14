import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/Rectangle.png";
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getStories } from "../../redux/apiSlices/story/getStoriesSlice";
import { IStory } from "../../types/story.interface";
import moment from "moment";


const UserStory = () => {
  const dispatch = useAppDispatch();
  const [catId, setCatId] = useState(1);
  const [page, setPage] = useState(1)
  const {stories} = useAppSelector(state => state.getStories);
  console.log(stories?.data)
  useEffect(()=>{
    dispatch(getStories({catId, page}));
  },[dispatch, catId, page])
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 my-6">
        {
          stories?.data?.map((story: IStory, index:number)=>(
            <Link key={index} to={`/workers/story-details/1`}>
              <div  className="flex items-center gap-6 w-full bg-white rounded-lg p-2">
                  <img src={photo} width={100} height={100} alt="" />
                  <div>
                    <h3 className="text-[18px] font-medium">{story?.description}</h3>
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
    )
}

export default UserStory