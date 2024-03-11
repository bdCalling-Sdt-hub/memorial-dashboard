import Header from "../../layouts/Main/Header"
import HeadingText from "../../util/HeadingText"
import { RiArrowLeftSLine } from "react-icons/ri";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSubscription } from "../../redux/apiSlices/subscription/getSubscriptionSlice";
import { useAppDispatch } from "../../redux/hook";
import { useParams } from "react-router-dom"
import { Input, Form, Button } from 'antd';
import { updateSubscription } from "../../redux/apiSlices/subscription/updateSubscriptionSlice";
import Swal from "sweetalert2";
import {  PlusOutlined } from '@ant-design/icons';
import { CiCircleMinus  } from "react-icons/ci";

const EditSubscription = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const subscription= JSON.parse(localStorage.getItem("subscription"));
    
    const { package_name, word_limit, image_limit, feature, duration, amount} = subscription;


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
            feature: JSON.stringify(values?.features?.map((item:any) => ({ feature: item })))
        }
        if(value?.id && value?.package_name && value?.duration && value?.word_limit && value?.image_limit && value?.amount && value?.feature){
            dispatch(updateSubscription(value)).then(response => {
                if(response.payload.message === "Package update success fully"){
                    localStorage.setItem("subscription", JSON.stringify(response?.payload?.data));
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
        features: feature?.map((item: any)=> item?.feature)
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
                                        <p className="text-lg font-normal text-[#0071E3] mb-4">Character Limit</p>
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
                                    {
                                        (fields, { add, remove }) => (
                                            <>
                                                {
                                                    fields.map((field, index) => (
                                                        <Form.Item
                                                            required={false}
                                                            key={field.key}
                                                            initialValue={initialFormValues?.features[index]?.feature}
                                                            className="w-full"
                                                        >
                                                            <div  className='flex items-center gap-[30px] w-full'>
                                                                <Form.Item
                                                                    {...field}
                                                                    validateTrigger={['onChange', 'onBlur']}
                                                                    style={{marginBottom : 0}}
                                                                    className='w-full'
                                                                >
                                                                    <Input
                                                                        style={{
                                                                            width:"100%",
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
                                                                <div>
                                                                    {
                                                                        fields.length > 0 ? (
                                                                            <CiCircleMinus
                                                                                size={44}
                                                                                className="dynamic-delete-button cursor-pointer text-[#D7263D]"
                                                                                onClick={() => remove(field.name)}
                                                                            />
                                                                        ) 
                                                                        : 
                                                                        null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </Form.Item>
                                                    ))
                                                }

                                                <Form.Item>
                                                    <Button
                                                        onClick={() => add()}
                                                        style={{
                                                            height: "56px",
                                                            background: "transparent",
                                                            borderRadius: "8px",
                                                            border: "1px solid #0071E3",
                                                            outline: "none",
                                                            color: "#0071E3",
                                                            fontSize: "18px",
                                                            width: "100%",
                                                        }}
                                                        icon={<PlusOutlined />}
                                                    >
                                                        {initialFormValues.features[fields.length]?.feature || 'Add field'}
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )
                                    }
                                </Form.List>   
                            </div>  
                            <Form.Item  style={{marginBottom: 0}}>
                                <Button
                                    type="primary" htmlType="submit"
                                    style={{
                                        height: "56px",
                                        background: "#0071E3",
                                        borderRadius: "8px",
                                        outline: "none",
                                        color: "white",
                                        fontSize: "18px",
                                        width: "100%",
                                    }}
                                >
                                    Update Subscription
                                </Button>
                            </Form.Item> 
                                
                                
                        </div>
                    </Form>
                </div>
    )
}

export default EditSubscription;

