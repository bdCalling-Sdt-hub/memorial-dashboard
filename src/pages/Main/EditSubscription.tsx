import Header from "../../layouts/Main/Header"
import HeadingText from "../../util/HeadingText"
import { RiArrowLeftSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { editSubscription } from "../../redux/apiSlices/subscription/editSubscriptionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useParams } from "react-router-dom"
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { AiOutlineMinusCircle } from "react-icons/ai";


const EditSubscription = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { subscription } = useAppSelector(state=> state.editSubscription);
    const [add, setAdd] = useState(false);
    const [feature, setFeature] = useState('');
    console.log(feature);


    const handleSaveFeature=()=>{
        if(feature === ""){
            alert("Input Correct Feature Name")
        }
    }


    useEffect(()=>{
        if(id){
            dispatch(editSubscription(id));
        }
    }, [dispatch, id]);

    const handleDelete = (data:any)=>{
        console.log(data);
    }
      
    return (
        <div>
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>
            <Link to="/subscription">
                <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Edit Subscriptions</HeadingText>
            </Link>
            <div className="bg-white rounded-2xl p-6 mt-6 h-[730px] overflow-y-scroll">

                {/* package information start */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-lg font-normal text-[#0071E3] mb-4">Package Name</p>
                            <div className="pl-4 flex items-center h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full">
                                <p className="text-[#2B2A2A] text-[18px] font-normal">{subscription?.package_name}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-normal text-[#0071E3] mb-4">Package Amount</p>
                            <div className="pl-4 flex items-center h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full">
                                <p className="text-[#2B2A2A] text-[18px] font-normal">{subscription?.amount}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-normal text-[#0071E3] mb-4">Package Expiration</p>
                        <div className="pl-4 flex items-center h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full">
                            <p className="text-[#2B2A2A] text-[18px] font-normal">{subscription?.duration} Month</p>
                        </div>
                    </div>
                </div>
                {/* package information start */}

                {/* divider */}

                <div className="w-full h-[1px] bg-[#0071E3] my-6"></div>

                {/* package feature */}
                <p className="text-lg font-normal text-[#0071E3] mb-4">Package Name</p>
                <div className="grid grid-cols-1 gap-4">
                    {
                        subscription?.feature?.map((name:string, index: number)=>(
                            <div key={index} className="flex items-center gap-6 w-full">
                                {/* <div className="pl-4 flex items-center h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full">
                                    <p className="text-[#2B2A2A] text-[18px] font-normal">{name?.feature} Month</p>
                                </div> */}
                                <Input
                                    name='feature'
                                    placeholder="Enter Feature" 
                                    prefix={false}
                                    defaultValue={name?.feature}
                                    style={{
                                        border: "1px solid #8ABEF2",
                                        height: "56px",
                                        background: "white",
                                        borderRadius: "8px",
                                        outline: "none",
                                        color: "black",
                                        fontSize: "18px"
                                    }}
                                />
                                <AiOutlineMinusCircle onClick={()=>handleDelete(index)}  size={33} color="#D7263D" />
                            </div>
                        ))
                    }
                    {
                        add 
                        &&
                        <div className="flex items-center gap-6 w-full">
                            <Input
                                name='feature'
                                onChange={(e)=>setFeature(e.target.value)} 
                                placeholder="Enter Feature" 
                                prefix={false}
                                className="custom-input" 
                                style={{
                                    border: "1px solid #8ABEF2",
                                    height: "56px",
                                    background: "white",
                                    borderRadius: "8px",
                                    outline: "none",
                                    color: "black",
                                    fontSize: "18px"
                                }}
                            />
                            <AiOutlineMinusCircle className="cursor-pointer" onClick={()=>setAdd(false)}  size={33} color="#D7263D" />
                        </div> 
                    }
                    
                </div>

                {
                    add 
                    ?
                    <div onClick={handleSaveFeature} 
                        className="
                            h-[56px] 
                            cursor-pointer 
                            mt-4 
                            w-[95.5%] 
                            bg-[#0071E3]
                            text-white 
                            rounded-lg 
                            flex 
                            items-center 
                            justify-center 
                            text-lg 
                            font-semibold
                        "
                    >
                        Save Feature
                    </div>
                    :
                    <div onClick={()=>setAdd(true)} 
                        className="
                            h-[56px] 
                            cursor-pointer 
                            mt-4 
                            w-[95.5%] 
                            bg-[#0071E3]
                            text-white 
                            rounded-lg 
                            flex 
                            items-center 
                            justify-center 
                            text-lg 
                            font-semibold
                        "
                    >
                        Add Feature
                    </div>
                }
                
            </div>
        </div>
    )
}

export default EditSubscription


// <div className="grid grid-cols-1 gap-4">
//                     {
//                         subscription?.feature?.map((name:string, index: number)=>(
//                             <div key={index} className="flex items-center gap-6 w-full">
//                                 <div className="pl-4 flex items-center h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full">
//                                     <p className="text-[#2B2A2A] text-[18px] font-normal">{name?.Feature} Month</p>
//                                 </div>
//                                 <AiOutlineMinusCircle onClick={()=>handleDelete(index)}  size={33} color="#D7263D" />
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div onClick={handleAddCount} className="h-[56px] mt-4 w-[95.5%] bg-[#0071E3] text-white rounded-lg flex items-center justify-center text-lg font-semibold">
//                     Add Feature
//                 </div>