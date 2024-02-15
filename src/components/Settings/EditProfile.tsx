import Header from "../../layouts/Main/Header";
import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import person from "../../assets/Ellipse 610.png";
import { Input, Form, Upload } from "antd";
import { HiOutlineMail, HiOutlineUser  } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useState } from "react";
import { editProfile } from "../../redux/apiSlices/authentication/editProfileSlice";

const EditProfile = () => {
    const [img, setImg] = useState();
    const dispatch = useAppDispatch();

    const {profile} = useAppSelector(state=> state.editProfile);
    console.log(profile)

    const onChange = ({ fileList }) => {
        setImg(fileList[0].originFileObj);
    };

    const handleUpdate=(values: any)=>{
        const formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("address", values.address);
        formData.append("mobile", values.mobile);
        formData.append("email", values.email);
        formData.append("image", img);
        dispatch(editProfile(formData));
    }
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
                <Form 
                        name="update_profile"
                        onFinish={handleUpdate}
                    >
                        <Form.Item>
                            <img className="mx-auto" src={person} width={144} height={144} alt="" />
                            <Upload
                                listType="picture"
                                maxCount={1}
                                beforeUpload={() => false}
                                onChange={onChange}
                                style={{
                                    textAlign: "center",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    color: "#0071E3"
                                }}
                            >
                                Change Photo
                            </Upload>
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