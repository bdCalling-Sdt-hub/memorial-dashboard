import { RiArrowLeftSLine } from "react-icons/ri";
import ImgConfig from "../../ImgConfig"
import Header from "../../layouts/Main/Header";
import Spinner from '../Spinner';
import HeadingText from "../../util/HeadingText";
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { getStory } from "../../redux/apiSlices/story/getStoryDetailsSlice";
import moment from "moment";
import { storyStatus } from "../../redux/apiSlices/story/storyStatusSlice";

const StoryRequestDetails = () => {
  const {id} = useParams();
  console.log(id)
  const dispatch = useAppDispatch();
    const { story, loading }: { story: IStory } = useAppSelector(state=> state.getStoryDetails);
    console.log(story);
    useEffect(()=>{
      dispatch(getStory(id));
    }, [dispatch, id]);

  const handleStoryStatus=(id: number)=>{
    dispatch(storyStatus({id: id, status: 1 as number}));
  }

  const handleStoryStatusReject=(id: number)=>{
    dispatch(storyStatus({id: id, status: 2 as number}));
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
                <div className="flex items-end justify-end mb-11">
                  <Header/>
                </div>
                <Link to="/workers">
                  <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Story Details</HeadingText>
                </Link>


                <div className='bg-white rounded-[16px] h-[727px] p-6 mt-6'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-6 font-semibold text-[#0071E3] mb-6'>{story?.story_title}</h1>
                            
                        </div>
                        <p className='text-[#2B2A2A] text-[18px] font-normal'>{moment(story?.created_at).format('LT')}, {story?.death_date}</p>
                        <button className='w-[94px] h-[29px] rounded-[4px] bg-[#0071E3] text-white'>Indivisual</button>
                    

                        <div className='flex gap-2 mt-4 mb-[27px]'>
                            <img src={`${ImgConfig}${story?.story_image[0]}`} width={478} height={313} alt="" />
                            <p className='text-[18px] font-normal'>{story?.description}</p>
                        </div>
                        <p className='text-[18px] font-normal'>{story?.description}</p>
                        <br />

                        <div className='flex gap-2 mt-4 mb-[27px]'>
                            <img src={`${ImgConfig}${story?.story_image[1]}`} width={478} height={313} alt="" />
                            <p className='text-[18px] font-normal'>{story?.description}</p>
                        </div>
                  <div className="flex items-center gap-3 w-full mt-11">
                    <button onClick={()=>handleStoryStatusReject(story?.id)} className={`w-[157px] h-[36px] rounded-lg  border border-[#0071E3] text-[#0071E3] `}>Reject</button>
                    <button onClick={()=>handleStoryStatus(story?.id)} className={`w-[157px] h-[36px] rounded-lg bg-[#0071E3] text-white `}>Accept</button>
                  </div>
                </div>
            </div>
        }
    </>
  )
}

export default StoryRequestDetails