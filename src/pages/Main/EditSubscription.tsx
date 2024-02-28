import Header from "../../layouts/Main/Header"
import HeadingText from "../../util/HeadingText"
import { RiArrowLeftSLine } from "react-icons/ri";
import { useEffect, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { getSubscription } from "../../redux/apiSlices/subscription/getSubscriptionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useParams } from "react-router-dom"
import { Input, Form, Button } from 'antd';
import { updateSubscription } from "../../redux/apiSlices/subscription/updateSubscriptionSlice";
import Swal from "sweetalert2";
import {  PlusOutlined } from '@ant-design/icons';
import { CiCircleMinus  } from "react-icons/ci";

const EditSubscription = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    // const { subscription, loading } = useAppSelector(state=> state.getSubscription);
    const subscription= JSON.parse(localStorage.getItem("subscription"));
    
    const { package_name, word_limit, image_limit, feature, duration, amount} = subscription;
    const [changeFeature, setChangeFeature] =useState({});
    // const [packages, setPackage] =useState({});
    const [features, setFeature] =useState();

    const handleFeatureChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setChangeFeature(prev=>({...prev, [e.target.name]:e.target.value}));
        const data = Object.values(changeFeature);
        const result = data.map(item => ({ feature: item }));
        setFeature(result);
    }
    

    useEffect(()=>{
        if(id){
            dispatch(getSubscription(id));
        }
    }, [dispatch, id]);


    const handleSubmit=(values:any)=>{

        const value = {
            id: id,
            package_name: values?.package_name,
            duration: values?.duration,
            word_limit: values?.word_limit,
            image_limit: values?.image_limit,
            amount: values?.amount,
            feature: features
        }
        if(value?.id && value?.package_name && value?.duration && value?.word_limit && value?.image_limit && value?.amount){
            dispatch(updateSubscription(value)).then(response => {
                console.log(response)
                if(response.payload.message === "Package update success fully"){
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
       
    }

    const initialFormValues = {
        package_name: package_name,
        duration: duration,
        word_limit: word_limit,
        image_limit: image_limit,
        amount: amount,
        features: features
    };

    return (
        
                <div>
                    <div className="flex items-end justify-end mb-11">
                        <Header/>
                    </div>
                    <Link to="/subscription">
                        <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} /> Edit Subscriptions</HeadingText>
                    </Link>

                    <Form
                        initialValues={initialFormValues}
                        onFinish={handleSubmit}
                    >
                        <div className="bg-white rounded-2xl p-6 mt-6 h-[730px] overflow-y-scroll">

                            {/* package information start */}
                            
                            <div className="grid grid-cols-1 gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-lg font-normal text-[#0071E3] mb-4">Package Name</p>
                                        <Form.Item 
                                            name="package_name"
                                            style={{marginBottom: 0}}
                                        >
                                            <Input
                                                name='package_name'
                                                placeholder="Enter Feature" 
                                                prefix={false}
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
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <p className="text-lg font-normal text-[#0071E3] mb-4">Package Amount</p>
                                        <Form.Item name="amount" style={{marginBottom: 0}}>
                                            <Input
                                                name='amount'
                                                placeholder="Enter Feature" 
                                                prefix={false}
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
                                        </Form.Item>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-lg font-normal text-[#0071E3] mb-4">Package Expiration</p>
                                        <Form.Item name="duration" style={{marginBottom: 0}}>
                                            <Input
                                                name='duration'
                                                placeholder="Enter Feature" 
                                                prefix={false}
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
                                        </Form.Item>
                                    </div>

                                    <div>
                                        <p className="text-lg font-normal text-[#0071E3] mb-4">Word Limit</p>
                                        <Form.Item name="word_limit" style={{marginBottom: 0}}>
                                            <Input
                                                name='word_limit'
                                                placeholder="Enter Feature" 
                                                prefix={false}
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
                                        </Form.Item>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-lg font-normal text-[#0071E3] mb-4">Image Limit</p>
                                    <Form.Item name="image_limit" style={{marginBottom: 0}}>
                                        <Input
                                            name='image_limit'
                                            placeholder="Enter Feature" 
                                            prefix={false}
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
                                    </Form.Item>
                                </div>
                            </div>
                            {/* package information start */}

                            {/* divider */}

                            <div className="w-full h-[1px] bg-[#0071E3] my-6"></div>

                            {/* package feature */}
                            <p className="text-lg font-normal text-[#0071E3] mb-4">Package Feature</p>
                            
                                
                            <div className="grid grid-cols-1 gap-4">
                            <Form.List name="features">
                                {() => (
                                    <>
                                    {JSON.parse(feature)?.map(({ key, name }) => (
                                        <Form.Item
                                            key={key}
                                            name={[name?.feature, 'feature']}
                                        >
                                            <Input defaultValue={name?.feature} />
                                        </Form.Item>
                                    ))}
                                    
                                    </>
                                )}
                            </Form.List>


                                
                                <div>

                                    {/* <Form> */}
                                        <Form.List name="names" >
                                            {
                                            
                                                (fields, { add, remove }) => (
                                                    <>
                                                        {
                                                            fields.map((field, index) => (
                                                                <Form.Item
                                                                    required={false}
                                                                    key={field.key}
                                                                    className="w-full"
                                                                >
                                                                    <Form.Item
                                                                        {...field}
                                                                        validateTrigger={['onChange', 'onBlur']} 
                                                                        className="w-full "
                                                                        style={{margin: 0}}
                                                                    >
                                                                        <div className="flex items-center gap-[30px]">
                                                                            <Input
                                                                                name={`feature${index + 7}`}
                                                                                placeholder="Enter Feature" 
                                                                                prefix={false}
                                                                                onChange={handleFeatureChange}
                                                                                style={{
                                                                                    border: "1px solid #8ABEF2",
                                                                                    height: "56px",
                                                                                    background: "white",
                                                                                    borderRadius: "8px",
                                                                                    outline: "none",
                                                                                    color: "black",
                                                                                    fontSize: "18px",
                                                                                    margin : 0
                                                                                    
                                                                                }}
                                                                            />
                                                                            <div>
                                                                                {
                                                                                    fields.length > 0 ? (
                                                                                        <CiCircleMinus  size={44} color="#D7263D"
                                                                                            onClick={() => remove(field.name)}
                                                                                        />
                                                                                    )
                                                                                    : 
                                                                                    null
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </Form.Item>
                                                                {/* <div className="w-[10%]">
                                                                    {
                                                                        fields.length > 0 ? (
                                                                            <CiCircleMinus  size={44} color="#D7263D"
                                                                                onClick={() => remove(field.name)}
                                                                            />
                                                                        )
                                                                        : 
                                                                        null
                                                                    }
                                                                </div> */}
                                                                </Form.Item>
                                                            ))
                                                        }
                                                        <Form.Item>
                                                            <Button
                                                                
                                                                onClick={() => add()}
                                                                style={{
                                                                width: '100%',
                                                                }}
                                                                icon={<PlusOutlined />}
                                                                className="
                                                                    h-[56px] 
                                                                    cursor-pointer 
                                                                    mt-4 
                                                                    border
                                                                    border-[#0071E3]
                                                                    text-[#0071E3]
                                                                    rounded-lg 
                                                                    flex 
                                                                    items-center 
                                                                    justify-center 
                                                                    text-lg 
                                                                    font-semibold
                                                                "
                                                            >
                                                                Add field
                                                            </Button>
                                                        </Form.Item>
                                                    </>
                                                )
                                            }
                                        </Form.List>
                                </div>


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
                                        Update Subscription
                                </button>
                            </div>
                                
                                
                        </div>
                    </Form>
                </div>
    )
}

export default EditSubscription;

