import Header from "../../layouts/Main/Header";
import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import person from "../../assets/Ellipse 610.png";
import { Input, Form} from "antd";
import { HiOutlineMail, HiOutlineUser  } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import {  useState } from "react";

import ImgConfig from "../../ImgConfig";
import baseURL from "../../Config";
import Swal from "sweetalert2";


const EditProfile = () => {
    const profile = JSON.parse(localStorage.getItem('userInfo'));
    const [image, setImage] = useState(profile?.image ? `${ImgConfig}${profile?.image}` : person);
    const [imgURL, setImgURL] = useState(image);
    
    const onChange = (e:any) => {
        const file= e.target.files[0];
        console.log(file)
        const imgUrl = URL.createObjectURL(file);
        setImgURL(imgUrl);
        setImage(file)
    };

    const handleUpdate=async(values: any)=>{
        const formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("address", values.address);
        formData.append("mobile", values.mobile);
        formData.append("email", values.email);
        formData.append("image", image);
        if(image){
            formData.append("image", image);
        }
        const response = await baseURL.post(`/profile/edit/1?_method=PUT`, formData, {
            headers: {
              "Content-Type": 'multipart/form-data',
              authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        if(response?.data.status === 200){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Profile Update Successful",
                showConfirmButton: false,
                timer: 1500
            }).then(()=>{
                location.reload();
            })
        };
        localStorage.setItem('userInfo', JSON.stringify(response?.data?.data))
        
    }

    const initialFormValues = {
        fullName: profile?.fullName,
        email: profile?.email,
        mobile: profile?.mobile,
        image: profile?.image,
        address: profile?.address,
    };

    
    return (
        <div>
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>
            <div className="w-fit">
                <Link to="/settings/profile">
                    <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} />Edit Profile</HeadingText>
                </Link>
            </div>
            <div className="mt-6 bg-white rounded-xl  h-[728px] py-[84px]">
                <div className="w-[350px]  mx-auto">
                    <img className="mx-auto rounded-full" src={imgURL} width={144} height={144} alt="" />    
                    <label className="font-bold cursor-pointer text-[#0071E3] mt-2 block text-center" htmlFor="img">Change Photo</label>
                    <input onChange={onChange} className="hidden" type="file" name="" id="img" />
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={initialFormValues}
                    onFinish={handleUpdate}
                >
                        <Form.Item>
                            
                        </Form.Item>
                            <Form.Item  
                                name="fullName"
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter Your Full Name"
                                    prefix={<HiOutlineUser size={24} className="mr-2" color="#0071E3" />}
                                    style={{
                                        border: "1px solid #8ABEF2",
                                        background: "transparent",
                                        height: "52px",
                                        borderRadius: "8px",
                                        outline: "none",
                                    }}
                                    bordered={false}
                                />
                            </Form.Item>   

                            <Form.Item
                                name="email"
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter your Email"
                                    prefix={<HiOutlineMail size={24} className="mr-2" color="#0071E3" />}
                                    style={{
                                        border: "1px solid #8ABEF2",
                                        background: "transparent",
                                        height: "52px",
                                        borderRadius: "8px",
                                        outline: "none",
                                    }}
                                    bordered={false}
                                />
                            </Form.Item>

                            <Form.Item 
                                 name="mobile"
                            >  
                                <Input
                                    size="large"
                                    placeholder="Enter Phone Number"
                                    prefix={<IoCallOutline size={24} className="mr-2" color="#0071E3" />}
                                    style={{
                                        border: "1px solid #8ABEF2",
                                        background: "transparent",
                                        borderRadius: "8px",
                                        height: "52px",
                                        outline: "none",
                                    }}
                                    bordered={false}
                                />
                            </Form.Item>

                            <Form.Item
                                name="address"
                            >    
                                <Input
                                    size="large"
                                    placeholder="Bruce Matthews"
                                    prefix={<CiLocationOn size={24} className="mr-2" color="#0071E3" />}
                                    style={{
                                        border: "1px solid #8ABEF2",
                                        background: "transparent",
                                        borderRadius: "8px",
                                        height: "52px",
                                        outline: "none",
                                    }}
                                    bordered={false}
                                />
                            </Form.Item>
                        <Form.Item>
                            <button type="submit" className="mt-11 w-full h-[56px] bg-[#0071E3] text-[18px] font-semibold text-white rounded-[8px]">Update Profile</button>
                        </Form.Item>
                </Form>  
                    
                </div>
            </div>
        </div>
    )
}

export default EditProfile