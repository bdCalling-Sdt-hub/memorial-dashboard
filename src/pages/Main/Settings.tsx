import { IconChevronLeft, IconChevronRight, IconLock, IconMail } from "@tabler/icons-react";
import {  Input, Modal, Switch } from "antd";
import { useState } from "react";
import OTPInput from "react-otp-input";
import {  useNavigate } from "react-router-dom";
import Header from "../../layouts/Main/Header";
import { useAppDispatch } from "../../redux/hook";
import { updatePassword } from "../../redux/apiSlices/authentication/updatePasswordSlice";
import { forgetPassword } from "../../redux/apiSlices/authentication/forgetPasswordSlice";
import Swal from "sweetalert2";
import { verifiedOtpReset } from "../../redux/apiSlices/authentication/verifiedOtpResetSlice";
import { resetPassword } from "../../redux/apiSlices/authentication/resetPasswordSlice";
const resetEmail= localStorage.getItem("resetEmail");


const Settings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("");
  const [otp, setOtp] = useState("");
  const [changeAuth, setChangeAuth] = useState('');
  const [emails, setEmail] = useState('');
  const [resetAuth, setResetAuth] = useState('');
  console.log(resetAuth)

  const handleChange = (e:any) => {
    setChangeAuth(prev=>({...prev, [e.target.name]:e.target.value}))
  }
  
  const handleReset = (e:any) => {
    setResetAuth(prev=>({...prev, [e.target.name]:e.target.value}))
  }

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

  const handleChangePassword=(e:any)=>{
    e.preventDefault();
    const value = {
      current_password: changeAuth.current_password,
      new_password: changeAuth.new_password,
      confirm_password: changeAuth.confirm_password,
    }
    dispatch(updatePassword(value)).then(response => {
      if(response.payload.message){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.payload.message,
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          setIsModalOpen(false)
        })
      }
    })
    .catch(error => {
      console.log(error)
    });
  }
  const handleForgetPassword=(e)=>{
    e.preventDefault();
    if(emails){
      dispatch(forgetPassword({email: emails})).then(response => {
        console.log()
          Swal.fire({
            position: "center",
            icon: "success",
            title: response.payload,
            showConfirmButton: false,
            timer: 1500
          }).then(()=>{
            setModelTitle("Verify OTP")
          })
        })
        .catch(error => {
          console.log(error)
        });
    }
  }

  const handleVerifyOtp=(e:any)=>{
    e.preventDefault();
    dispatch(verifiedOtpReset(otp)).then(response => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.payload,
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          setModelTitle("Reset Password")
        })
      })
      .catch(error => {
        console.log(error)
      });
  }
  const handleResetPassword=(e:any)=>{
    e.preventDefault();
    const value = {
      email : resetEmail as string,
      password: resetAuth.password as string,
      password_confirmation: resetAuth.confirmation_password as string

    }
    dispatch(resetPassword(value)).then(response => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.payload,
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          setModelTitle("Reset Password")
        })
      })
      .catch(error => {
        console.log(error)
      });
  }


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
                className="flex items-center cursor-pointer justify-start gap-4 text-[#0071E3] mb-4"
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
              <form className="w-full" onSubmit={handleChangePassword}>
                <Input.Password
                  size="large"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  name="current_password"
                  prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
                  style={{
                    border: "1px solid #0071E3",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    marginBottom: "20px",
                  }}
                  bordered={false}
                />
                <Input.Password
                  size="large"
                  name="new_password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
                  style={{
                    border: "1px solid #0071E3",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    marginBottom: "20px",
                  }}
                  bordered={false}
                />

                <Input.Password
                  size="large"
                  name="confirm_password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
                  style={{
                    border: "1px solid #0071E3",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    marginBottom: "20px",
                  }}
                  bordered={false}
                />
                <p className="text-end text-[#0071E3] font-medium">
                  <button onClick={() => setModelTitle("Forget password")}>
                    Forget Password
                  </button>
                </p>

                <button
                  type="submit"
                  className="bg-[#0071E3]
                  text-white mt-5 py-3 rounded-lg w-full font-medium text-lg hover:bg-white border hover:border-[#0071E3] hover:text-[#0071E3] duration-200"
                >
                  Change password
                </button>
              </form>
            )}



            {modelTitle === "Forget password" && (
              <form onSubmit={handleForgetPassword}>
                <p className="text-center">
                  Please enter your email address to recover your account.
                </p>
                <Input
                  size="large"
                  placeholder="Enter your Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  prefix={<IconMail className="mr-2" color="#0071E3" size={24} />}
                  style={{
                    border: "1px solid #0071E3",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                  bordered={false}
                />

                <button
                  // onClick={() => setModelTitle("Verify OTP")}
                  type="submit"
                  className="bg-[#0071E3]
            text-white mt-5 py-3 rounded-lg w-full hover:bg-white border hover:text-[#0071E3] duration-200"
                >
                  Send OTP
                </button>
              </form>
            )}


            {modelTitle === "Verify OTP" && (
              <form onSubmit={handleVerifyOtp}>
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
                    border: "1px solid #0071E3",
                    color: "#b278fb",
                  }}
                  renderInput={(props) => <input {...props} />}
                />
                <p className="flex items-center justify-between mt-2 mb-6">
                  Didn’t receive code?
                  <button className="font-medium text-[#0071E3]">Resend</button>
                </p>

                <button
                  type="submit"
                  className="bg-[#0071E3]
            text-white mt-5 py-3 rounded-lg w-full hover:bg-white hover:text-[#0071E3] duration-200"
                >
                  Verify
                </button>
              </form>
            )}




            {modelTitle === "Reset Password" && (
              <form className="w-full" onSubmit={handleResetPassword}>
                <p className="text-center mb-5">
                  Set a new password and it should be 8-10 characters long.
                </p>
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleReset}
                  prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
                  style={{
                    border: "1px solid #0071E3",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    marginBottom: "20px",
                  }}
                  bordered={false}
                />
                <Input.Password
                  size="large"
                  name="confirmation_password"
                  onChange={handleReset}
                  placeholder="Re-Enter your password"
                  prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
                  style={{
                    border: "1px solid #0071E3",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    marginBottom: "20px",
                  }}
                  bordered={false}
                />

                <button
                  type="submit"
                  className="bg-[#0071E3]
            text-white mt-5 py-3 rounded-lg text-[16px] font-medium w-full hover:bg-white border hover:border-[#0071E3] hover:text-[#0071E3] duration-200"
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
