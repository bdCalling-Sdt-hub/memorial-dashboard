import React, { ChangeEvent, useEffect, useState } from 'react'
import Header from '../../layouts/Main/Header'
import { Button, Form, Input, Modal } from 'antd'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { createService } from '../../redux/apiSlices/Services/createServiceSlice';
import Swal from 'sweetalert2';
import { getService } from '../../redux/apiSlices/Services/getAllServiceSlice';
import { deleteService } from '../../redux/apiSlices/Services/deleteServiceSlice';
import ImgConfig from "../../ImgConfig";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import { updateService } from '../../redux/apiSlices/Services/updateServiceSlice';

interface FormValues {
    title: string;
    description: string;
}


const Services = ():React.JSX.Element => {
    const [openAddModel, setOpenAddModel] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [imgUrl, setImgUrl] = useState<string | null>(null);
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const {loading} = useAppSelector(state=> state.createService)
    const {services} = useAppSelector(state=> state.getService)
    const [value, setValue] = useState()


    useEffect(()=>{
        dispatch(getService())
    }, [dispatch])

    useEffect(()=>{
        if(value){
            form.setFieldsValue(value);
            setImgUrl(value?.image)
        }
    }, [form, value])

    form.setFieldsValue()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const url = URL.createObjectURL(file);
            setImgUrl(url);
        }
    };

    const handleClose=()=>{
        form.resetFields();
        setValue()
        setOpenAddModel(false)
        setImgUrl(null)
    }

    const handleSubmit=(values:FormValues)=>{
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            formData.append(key, values[key as keyof FormValues])
        });

        if(value){
            formData.append("id", value?.id);
            formData.append("_method", "PUT");
        }

        if(image){
            formData.append("image", image);
        }

        if(value){
            console.log(values)

            dispatch(updateService({id: value?.id, data:formData})).then((res)=>{
                if(res.type === "updateService/fulfilled"){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Service updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(()=>{
                        dispatch(getService())
                        handleClose()
                    })
                }
            })
        }else{
            dispatch(createService(formData)).then((res)=>{
                if(res.type === "createService/fulfilled"){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Service Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(()=>{
                        dispatch(getService())
                        setOpenAddModel(false)
                        form.resetFields()
                        setImgUrl(null)
                    })
                }else{
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: res?.payload,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }

    }

    const handleDelete=(id:number)=>{
        Swal.fire({
            title: "Are you sure to delete this User?",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteService(id)).then((res)=>{
                    console.log(res)
                    if(res.type === "deleteService/fulfilled"){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Service Deleted Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        }).then((_)=>{
                            dispatch(getService())
                        })
                    }
                })
                // Handle the confirmation logic here
            }
        });

    }

    




    return (
        <div>
            <div className="flex items-end justify-end mb-11">
                    <Header/>
                </div>
                <div className='mb-6'>
                    <div className='flex items-end justify-end w-full' >
                        <button onClick={()=>setOpenAddModel(true)}  className='w-[164px] h-[36px] rounded-[8px] text-white bg-[#0071E3]'>
                            Create Service
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-6 flex-wrap'>
                    {
                        services?.map((service:any, index)=>{
                            return(
                                <div key={index} className='border overflow-hidden group flex items-center justify-center w-fit h-fit relative rounded p-3 bg-white'>
                                    <div>
                                        <img style={{width: 150, height: 150}} src={`${ImgConfig}/${service?.image}`} alt="" />
                                        <p className='my-3'>{service?.title}</p>
                                        <p className=''>{service?.description}</p>
                                    </div>
                                    <div 
                                        className='
                                                absolute group-hover:h-20  
                                                transition-all duration-150 
                                                flex items-center justify-center 
                                                left-0 -bottom-2 w-full h-0 
                                                bg-[#0071E3]
                                                bg-opacity-90
                                            '
                                        >
                                        <div className='flex items-center gap-6'>
                                            <FaRegTrashAlt onClick={()=>handleDelete(service?.id)} size={22} className='cursor-pointer' color='white' />
                                            <AiTwotoneEdit onClick={()=>setValue(service)} size={22} className='cursor-pointer'  color='white' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>



                <Modal
                    centered
                    open={openAddModel || value}
                    onCancel={handleClose}
                    width={500}
                    footer={false}
                >
                    <div>
                        <h1 style={{marginBottom: "12px"}}>Create Service</h1>
                        <Form layout='vertical' form={form} onFinish={handleSubmit}>

                            <Form.Item
                                name={"title"}
                                label="Server Title"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter Service Title"
                                    }
                                ]}
                            >
                                <Input 
                                    style={{
                                        width: "100%",
                                        height: "52px",
                                        border: "1px solid #0071E3",
                                        borderRadius: "8px",
                                        padding : "16px",
                                        color: "black",
                                        outline: "none",
                                        backgroundColor: "white"
                                    }}
                                    type="text" 
                                    placeholder="Enter Service Title"
                                />
                            </Form.Item>

                            <div className='mb-4'>
                                <input onChange={handleChange} type="file" id='img' style={{display: "none"}} />
                                <label 
                                    htmlFor="img"
                                    style={{
                                        backgroundImage: `url(${imgUrl?.startsWith("blob") ? imgUrl : `${ImgConfig}/${imgUrl}`})`,
                                        backgroundPosition: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "auto"
                                    }}

                                    className='w-full h-[150px] text-blue-400 flex items-center justify-center border border-dashed rounded-lg'
                                >
                                    Service Image
                                </label>
                            </div>
                            <Form.Item
                                name={"description"}
                                label="Server Description"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Service Description"
                                    }
                                ]}
                            >
                                <Input.TextArea 
                                    style={{
                                        width: "100%",
                                        height: 200,
                                        border: "1px solid #0071E3",
                                        borderRadius: "8px",
                                        padding : "16px",
                                        color: "black",
                                        outline: "none",
                                        backgroundColor: "white"
                                    }}
                                    placeholder="Enter Service Description"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    style={{
                                        width : "100%",
                                        height: "45px",
                                        fontWeight: "400px",
                                        fontSize: "18px",
                                        background: "#0071E3",
                                        marginTop : "30px"
                                    }}
                                >
                                    {loading ? "Loading" : "Create"}
                                </Button>
                            </Form.Item>

                            
                        </Form>
                    </div>
                </Modal>
        </div>
    )
}

export default Services