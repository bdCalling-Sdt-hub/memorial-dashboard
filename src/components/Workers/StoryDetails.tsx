import React, { useEffect, useState } from 'react'
import Header from '../../layouts/Main/Header'
import HeadingText from '../../util/HeadingText'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getStory } from '../../redux/apiSlices/story/getStoryDetailsSlice';
import moment from 'moment';
import IStory from "../../types/story.interface"
import ImgConfig from "../../ImgConfig"
import Spinner from '../Spinner';
import { FaVolumeXmark, FaVolumeHigh } from "react-icons/fa6";
import ReactAudioPlayer from 'react-audio-player';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
const StoryDetails = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const { story, loading }: { story: IStory, loading: boolean } = useAppSelector(state=> state.getStoryDetails);
    console.log(story)
    useEffect(()=>{
        
        dispatch(getStory(id));
    }, [dispatch, id]);
    const person = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

    const [isPlaying, setIsPlaying] = useState(false);
    const handleVolume = () => {
        const audio = document.getElementById("audio");
        if (isPlaying) {
        audio!.pause();
        } else {
        audio!.play();
        }
        setIsPlaying(!isPlaying);
    };
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

                    <div className='bg-white rounded-[16px] h-[727px] p-6 mt-6 '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-6 font-semibold text-[#0071E3] mb-6'>{story?.story_title}</h1>
                            {
                                story?.music &&

                                <div>
                                <audio id="audio" controls className="hidden">
                                  <source src={`${ImgConfig}${JSON.parse(story?.music)}`} />
                                </audio>
                                
                                <div
                                  onClick={handleVolume}
                                  className={` ${isPlaying ? "bg-[#0071E3]" : "bg-[#9D9D9D]" } w-10 h-10 flex items-center justify-center text-white rounded-lg `}
                                >
                                  {isPlaying ? <FaVolumeUp size={24} /> : <FaVolumeMute size={24} />}
                                </div>
                              </div>
                            }
                        </div>
                        <p className='text-[#2B2A2A] text-[18px] font-normal'>{moment(story?.created_at).format('LT')}, {story?.death_date}</p>
                        <button className='w-[94px] h-[29px] rounded-[4px] bg-[#0071E3] text-white'>Indivisual</button>
                    

                        <div className='flex gap-2 mt-4 mb-[27px]'>
                            {
                                story?.story_image
                                &&
                                <img style={{width: "478px", height: "313px"}} src={`${ImgConfig}${story?.story_image[0]}` ? `${ImgConfig}${story?.story_image[0]}` : person}  alt="" />
                            }
                            <p className='text-[18px] font-normal'>{story?.description}</p>
                        </div>
                    </div>
                </div>
            }
        </>
        
    )
}

export default StoryDetails