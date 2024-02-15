import { IconChevronLeft } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { verifiedOtpReset } from "../../redux/apiSlices/authentication/verifiedOtpResetSlice";
import Swal from "sweetalert2";
import { forgetPassword } from "../../redux/apiSlices/authentication/forgetPasswordSlice";

const Verify = () => {
  const dispatch = useAppDispatch();
  const { message } = useAppSelector(state=> state.verifiedOtp);
  const {message: sms} = useAppSelector(state=> state.forgetPassword)
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleMatchOtp = () => {
    // navigate("/auth/reset-password");
    dispatch(verifiedOtpReset(otp));
  };

  useEffect(()=>{
    if(message){
      Swal.fire({
        position: "center",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        navigate("/auth/reset-password")
      });
    }
  }, [message, navigate]);

  const handleReset = ()=>{
    const email= localStorage.getItem("resetEmail");
    if(email){
      dispatch(forgetPassword({email : email}));
    }
  }


  useEffect(()=>{
    if(sms){
      Swal.fire({
        position: "center",
        icon: "success",
        title: sms,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }, [sms]);
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
      <p className="flex items-center justify-between text-[#0071E3] mt-4 text-[18px] font-normal ">
        Didn’t receive code?
        <p onClick={handleReset} className="font-semibold cursor-pointer text-[#0071E3]">
          Resend
        </p>
      </p>
      <button
        onClick={handleMatchOtp}
        className="bg-[#0071E3]
         text-white  h-[56px] rounded-lg text-lg font-semibold w-full mt-10 hover:bg-white hover:text-[#0071E3] duration-200"
      >
        Verify
      </button>
    </div>
  );
};

export default Verify;
