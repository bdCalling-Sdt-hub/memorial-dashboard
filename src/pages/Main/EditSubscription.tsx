import Header from "../../layouts/Main/Header"
import HeadingText from "../../util/HeadingText"
import { RiArrowLeftSLine } from "react-icons/ri";
import { useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { getSubscription } from "../../redux/apiSlices/subscription/getSubscriptionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useParams } from "react-router-dom"
import { Input } from 'antd';
import { updateSubscription } from "../../redux/apiSlices/subscription/updateSubscriptionSlice";
import Swal from "sweetalert2";

const EditSubscription = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { subscription, loading } = useAppSelector(state=> state.getSubscription);
    const [changeFeature, setChangeFeature] =useState({});
    const [packages, setPackage] =useState({});
    const [feature, setFeature] = useState();

    const handleChangePackage = (e: ChangeEvent<HTMLInputElement>) => {
        setPackage(prev =>({...prev, [e.target.name]:e.target.value}))
    }

    const handleFeatureChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setChangeFeature(prev=>({...prev, [e.target.name]:e.target.value}))
        const data = Object.values(changeFeature);
        const result = data.map(item => ({ feature: item }));
        setFeature(result);
    }
    

    useEffect(()=>{
        if(id){
            dispatch(getSubscription(id));
        }
    }, [dispatch, id]);


    const handleSubmit=()=>{
        const value= {
            id: id,
            package_name: packages?.packages ? packages?.packages : subscription?.package_name,
            amount: packages?.amount ? packages?.amount : subscription?.amount,
            duration: packages?.duration ? packages?.duration : subscription?.duration,
            word_limit: packages?.word_limit ? packages?.word_limit : subscription?.word_limit,
            image_limit: packages?.image_limit ? packages?.image_limit : subscription?.image_limit,
            feature : feature ? feature : subscription?.feature
        }
        
        dispatch(updateSubscription(value)).then(response => {
            if(response.payload.message){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: response?.payload?.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }    
        })
       
    }

      
    return (
        <>
            {
                loading 
                ?
                <p>Loading</p>
                :
            
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
                                    <Input
                                        name='package_name'
                                        placeholder="Enter Feature" 
                                        prefix={false}
                                        onChange={handleChangePackage}
                                        defaultValue={subscription?.package_name && subscription?.package_name}
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
                                </div>
                                <div>
                                    <p className="text-lg font-normal text-[#0071E3] mb-4">Package Amount</p>
                                    <Input
                                        name='amount'
                                        placeholder="Enter Feature" 
                                        prefix={false}
                                        onChange={handleChangePackage}
                                        defaultValue={subscription?.amount && subscription?.amount}
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
                                </div>
                            </div>


                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-lg font-normal text-[#0071E3] mb-4">Package Expiration</p>
                                    <Input
                                        name='duration'
                                        onChange={handleChangePackage}
                                        placeholder="Enter Feature" 
                                        prefix={false}
                                        defaultValue={subscription?.duration && subscription?.duration}
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
                                </div>

                                <div>
                                    <p className="text-lg font-normal text-[#0071E3] mb-4">Word Limit</p>
                                    <Input
                                        name='word_limit'
                                        onChange={handleChangePackage}
                                        placeholder="Enter Feature" 
                                        prefix={false}
                                        defaultValue={subscription?.word_limit&& subscription?.word_limit}
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
                                </div>
                            </div>

                            <div>
                                <p className="text-lg font-normal text-[#0071E3] mb-4">Image Limit</p>
                                <Input
                                    name='image_limit'
                                    onChange={handleChangePackage}
                                    placeholder="Enter Feature" 
                                    prefix={false}
                                    defaultValue={subscription?.image_limit && subscription?.image_limit}
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
                            </div>
                        </div>
                        {/* package information start */}

                        {/* divider */}

                        <div className="w-full h-[1px] bg-[#0071E3] my-6"></div>

                        {/* package feature */}
                        <p className="text-lg font-normal text-[#0071E3] mb-4">Package Feature</p>
                        
                            <div className="grid grid-cols-1 gap-4">
                                {
                                    subscription?.feature?.map((name:string, index: number)=>(
                                        <div key={index} className=" w-full">
                                            {/* <div className="pl-4 flex items-center h-[56px] border outline-none rounded-lg border-[#8ABEF2] w-full">
                                                <p className="text-[#2B2A2A] text-[18px] font-normal">{name?.feature} Month</p>
                                            </div> */}
                                            <Input
                                                name={`feature${index}`}
                                                placeholder="Enter Feature" 
                                                prefix={false}
                                                onChange={handleFeatureChange}
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
                                            {/* <AiOutlineMinusCircle onClick={()=>handleDelete(index)}  size={33} color="#D7263D" /> */}
                                        </div>
                                    ))
                                }

                                <button onClick={handleSubmit} type="submit"
                                    className="
                                        h-[56px] 
                                        cursor-pointer 
                                        mt-4 
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
                                    Update Feature
                                </button>
                            </div>

                            
                            
                    </div>
                </div>
            }
        </>
    )
}

export default EditSubscription