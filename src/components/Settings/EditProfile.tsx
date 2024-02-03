import Header from "../../layouts/Main/Header";
import HeadingText from "../../util/HeadingText";
import { RiArrowLeftSLine } from "react-icons/ri";
import person from "../../assets/Ellipse 610.png";
import { Input } from "antd";
import { IconMail } from "@tabler/icons-react";
import { HiOutlineMail, HiOutlineUser  } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const EditProfile = () => {
    return (
        <div>
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>
            <HeadingText color="#0071E3"> <RiArrowLeftSLine size={28} />Edit Profile</HeadingText>
            <div className="mt-6 bg-white rounded-xl w-[838px] h-[669px] py-[84px]">
                <div className="w-[350px]  mx-auto">
                    <img className="mx-auto" src={person} width={144} height={144} alt="" />
                    <p className="text-[16px] text-center font-medium text-[#0071E3] pt-3 pb-6">Change Picture</p>

                    <div className="grid grid-cols-1 gap-4">
                        <Input
                            size="large"
                            placeholder="Bruce Matthews"
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
                        <Input
                            size="large"
                            placeholder="Bruce Matthews"
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
                        <Input
                            size="large"
                            placeholder="Bruce Matthews"
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
                    </div>
                    <button className="mt-11 w-full h-[56px] bg-[#0071E3] text-[18px] font-semibold text-white rounded-[8px]">Update Profile</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile