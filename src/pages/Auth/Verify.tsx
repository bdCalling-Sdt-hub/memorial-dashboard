import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { verifiedOtpReset } from "../../redux/apiSlices/authentication/verifiedOtpResetSlice";
import Swal from "sweetalert2";
import { forgetPassword } from "../../redux/apiSlices/authentication/forgetPasswordSlice";
import { Form, Button } from "antd"

const Verify = () => {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleMatchOtp = () => {
    if(!otp || otp.length !== 6){
      setErr("Please Input Valid OTP");
      return;
    }else{
      setErr("")
    }

    dispatch(verifiedOtpReset(otp))
    .then(response=>{
      if(response.type === "verifiedOtpReset/fulfilled"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response.payload,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate("/auth/reset-password")
        });
      } 
      if(response.type === "verifiedOtpReset/rejected"){
        Swal.fire({
          position: "center",
          icon: "error",
          title: response.payload,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  };

  const handleReset = ()=>{
    const email= localStorage.getItem("resetEmail");
    if(email){
      dispatch(forgetPassword({email : email}))
      .then(response=>{
        if(response?.type === "forgetPassword/fulfilled"){
          Swal.fire({
            position: "center",
            icon: "success",
            title: response?.payload,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate("/auth/verify")
          });
        }
      })
    }
  }


  
  return (
    <div className=" w-[342px] mx-auto">
      <Link
        to="/auth/forget-password"
        className="flex items-center text-[#0071E3] justify-start gap-4 mb-5 text-2xl font-medium"
      >
        {" "}
        <IconChevronLeft size={38} /> Verify OTP
      </Link>

      <p className="mb-[38px] text-base font-normal">
        Please enter the otp we have sent you in your email.
      </p>
      <Form 
        onFinish={handleMatchOtp}
      >
        <Form.Item
          style={{marginBottom: "0"}}
          rules={[
            {
              required: true,
              message: "Please 6 Digit OTP",
            },
          ]}
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              height: "57px",
              width: "44px",
              borderRadius: "8px",
              marginRight: "16px",
              fontSize: "20px",
              border: "1px solid #0071E3",
              color: "#2B2A2A",
              outline: "none"
            }}
            renderInput={(props) => <input {...props} />}
          />
          <label htmlFor="" className="text-red-500 block mt-1">{err}</label>
        </Form.Item>
        
        <p className="flex items-center justify-between text-[#0071E3] mt-4 text-[18px] font-normal ">
          Didn’t receive code?
          <p onClick={handleReset} className="font-semibold cursor-pointer text-[#0071E3]">
            Resend
          </p>
        </p>

        <Form.Item>
          <Button
            block
            htmlType="submit"
            className="bg-[#0071E3]
          text-white  h-[56px] rounded-lg text-lg font-semibold w-full mt-10 hover:bg-white hover:text-[#0071E3] duration-200"
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
      
      
      
    </div>
  );
};

export default Verify;
