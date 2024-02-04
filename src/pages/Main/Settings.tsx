import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import {  Modal, Switch } from "antd";
import { useState } from "react";
import OTPInput from "react-otp-input";
import {  useNavigate } from "react-router-dom";
import Header from "../../layouts/Main/Header";

const Settings = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("");
  const [otp, setOtp] = useState("");

  const handleNavigate = (value: string) => {
    if (value === "notification") {
      return;
    } else if (value === "hidden-fee") {
      return;
    } else if (value === "hidden-fee-percentage") {
      setModelTitle("Set hidden fee percentage");
      setIsModalOpen(true);
    } else if (value === "change-password") {
      setModelTitle("Change password");
      setIsModalOpen(true);
    } else {
      navigate(`/settings/${value}`);
    }
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const settingsItem = [
    {
      title: "Notification",
      path: "notification",
    },
    {
      title: "subscription",
      path: "hidden-fee",
    },
   
    {
      title: "Change password",
      path: "change-password",
    },
    
    {
      title: "Terms of service",
      path: "term-of-service",
    },
    {
      title: "Privacy policy",
      path: "privacy-policy",
    },
    {
      title: "About us",
      path: "about-us",
    },
    
  ];

  return (
  <div>
    <div className="flex items-end justify-end mb-11">
      <Header/>
    </div>

    <div style={{backgroundColor:"white",padding:"20px",height:"100vh",borderRadius:"10px"}}>
          
          {settingsItem.map((setting, index) => (
            <div
              key={index}
              className="border border-[#0071e3] py-4 mb-2 px-4 text-sm rounded-lg bg-white flex items-center justify-between cursor-pointer hover:bg-[#e6f1fc] hover:textblack"
              onClick={() => handleNavigate(setting.path)}
            >
              <h2>{setting.title}</h2>
              <h2>
                {setting.path === "notification" ||
                setting.path === "hidden-fee" ? (
                  <Switch
                    defaultChecked
                    onChange={onChange}
                    style={{ background: "#0071e3" }}
                  />
                ) : (
                  <IconChevronRight />
                )}
              </h2>
            </div>
          ))}
          <Modal
            title={
              <div
                onClick={() => setIsModalOpen(false)}
                className="flex items-center cursor-pointer justify-center"
              >
                <IconChevronLeft />
                <p>{modelTitle}</p>
              </div>
            }
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
            footer={[]}
          >
            {modelTitle === "Set hidden fee percentage" && (
              <form>
                <input
                  type="text"
                  className="my-4 w-full bg-transparent border-b py-3 px-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Set hidden fee percentage"
                  name=""
                  id=""
                />

                <button
                  type="submit"
                  className="bg-[#b278fb]
            text-white mt-5 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
                >
                  Save
                </button>
              </form>
            )}
            {modelTitle === "Change password" && (
              <form className="w-full">
                <input
                  type="text"
                  className="w-full bg-transparent border-b py-3 px-2 mb-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Enter current password"
                  name=""
                  id=""
                />
                <input
                  type="text"
                  className="w-full bg-transparent mb-2 border-b py-3 px-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Enter new password"
                  name=""
                  id=""
                />
                <input
                  type="text"
                  className="w-full bg-transparent mb-2 border-b py-3 px-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Enter confirm password"
                  name=""
                  id=""
                />
                <p className="text-end text-[#b278fb] font-medium">
                  <button onClick={() => setModelTitle("Forget password")}>
                    Forget Password
                  </button>
                </p>

                <button
                  type="submit"
                  className="bg-[#b278fb]
            text-white mt-5 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
                >
                  Change password
                </button>
              </form>
            )}
            {modelTitle === "Forget password" && (
              <form>
                <p className="text-center">
                  Please enter your email address to recover your account.
                </p>
                <input
                  type="text"
                  className="my-4 w-full bg-transparent border-b py-3 px-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Enter your email"
                  name=""
                  id=""
                />

                <button
                  onClick={() => setModelTitle("Verify OTP")}
                  type="submit"
                  className="bg-[#b278fb]
            text-white mt-5 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
                >
                  Send OTP
                </button>
              </form>
            )}
            {modelTitle === "Verify OTP" && (
              <form>
                <p className="text-center">
                  Please enter your email address to recover your account.
                </p>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "5px",
                    marginRight: "20px",
                    fontSize: "20px",
                    marginTop: "40px",
                    border: "1px solid #b278fb",
                    color: "#b278fb",
                  }}
                  renderInput={(props) => <input {...props} />}
                />
                <p className="flex items-center justify-between mt-2 mb-8">
                  Didn’t receive code?
                  <button className="font-medium text-[#b278fb]">Resend</button>
                </p>

                <button
                  onClick={() => setModelTitle("Reset Password")}
                  type="submit"
                  className="bg-[#b278fb]
            text-white mt-5 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
                >
                  Verify
                </button>
              </form>
            )}
            {modelTitle === "Reset Password" && (
              <form className="w-full">
                <p className="text-center mb-5">
                  Set a new password and it should be 8-10 characters long.
                </p>
                <input
                  type="text"
                  className="w-full bg-transparent border-b py-3 px-2 mb-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Enter new password"
                  name=""
                  id=""
                />
                <input
                  type="text"
                  className="w-full bg-transparent mb-2 border-b py-3 px-2 outline-none focus:border-[#b278fb] duration-100"
                  placeholder="Enter confirm password"
                  name=""
                  id=""
                />

                <button
                  type="submit"
                  className="bg-[#b278fb]
            text-white mt-5 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
                >
                  Reset password
                </button>
              </form>
            )}
          </Modal>
    </div>

  </div>






  );
};

export default Settings;
