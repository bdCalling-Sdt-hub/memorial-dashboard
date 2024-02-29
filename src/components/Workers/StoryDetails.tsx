import React, { useEffect } from 'react'
import Header from '../../layouts/Main/Header'
import HeadingText from '../../util/HeadingText'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getStory } from '../../redux/apiSlices/story/getStoryDetailsSlice';
import moment from 'moment';
import IStory from "../../types/story.interface"
import ImgConfig from "../../ImgConfig"
const StoryDetails = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const { story }: { story: IStory } = useAppSelector(state=> state.getStoryDetails);
    console.log(story)
    useEffect(()=>{
        if (id && !isNaN(parseInt(id))) {
            dispatch(getStory(parseInt(id)));
        }
    }, [dispatch, id]);

    return (
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
            </div>
        </div>
    )
}

export default StoryDetails