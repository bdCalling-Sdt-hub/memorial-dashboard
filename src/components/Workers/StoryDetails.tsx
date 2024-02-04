import React from 'react'
import Header from '../../layouts/Main/Header'
import HeadingText from '../../util/HeadingText'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { HiVolumeUp } from "react-icons/hi";
import photo from "../../assets/Rectangle 178.png"
import { Link } from 'react-router-dom';

const StoryDetails = () => {
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
                    <h1 className='text-6 font-semibold text-[#0071E3] mb-6'>We helped our father write his last story</h1>
                    <div className='w-10 h-10 rounded-lg bg-[#0071E3] flex items-center justify-center'>
                        <HiVolumeUp size={24} color='#FFFFFF' />
                    </div>
                </div>
                <p className='text-[#2B2A2A] text-[18px] font-normal'>5:25 pm, 24 Dec, 2023</p>
                <button className='w-[94px] h-[29px] rounded-[4px] bg-[#0071E3] text-white'>Indivisual</button>
            

                <div className='flex gap-2 mt-4 mb-[27px]'>
                    <img src={photo} width={478} height={313} alt="" />
                    <p className='text-[18px] font-normal'>Lorem ipsum dolor sit amet consectetur. Congue eget eget dignissim luctus placerat rutrum orci leo dignissim. Adipiscing volutpat nisi quis habitant platea. Ut eget suspendisse cursus a adipiscing. Orci rutrum nibh egestas scelerisque libero quis tincidunt dignissim. Ut nunc nunc tincidunt eget ac ullamcorper molestie pellentesque mollis. Suspendisse scelerisque eu quam malesuada rutrum. Sit egestas et turpis eget aliquet urna amet. Habitant feugiat eget purus nibh ullamcorper. Viverra accumsan amet euismod sed vitae tellus scelerisque.</p>
                </div>

                <p className='text-[18px] font-normal'>Lorem ipsum dolor sit amet consectetur. Congue eget eget dignissim luctus placerat rutrum orci leo dignissim. Adipiscing volutpat nisi quis habitant platea. Ut eget suspendisse cursus a adipiscing. Orci rutrum nibh egestas scelerisque libero quis tincidunt dignissim.</p>
            </div>
        </div>
    )
}

export default StoryDetails