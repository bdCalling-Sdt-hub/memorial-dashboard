import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleMatchOtp = () => {
    navigate("/auth/reset-password");
  };
  return (
    <div className="text-center">
      <Link
        to="/auth/forget-password"
        className="flex items-center justify-center gap-1 mb-2 text-lg font-bold"
      >
        {" "}
        <IconChevronLeft /> Verify OTP
      </Link>

      <p className="mb-12">
        Please enter the otp we have sent you in your email.
      </p>

      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputStyle={{
          height: "80px",
          width: "90px",
          borderRadius: "5px",
          marginRight: "20px",
          fontSize: "20px",
          border: "1px solid #b278fb",
          color: "#b278fb",
        }}
        renderInput={(props) => <input {...props} />}
      />
      <p className="flex items-center justify-between mt-2 ">
        Didn’t receive code?
        <Link to="/auth/forget-password" className="font-medium text-[#b278fb]">
          Resend
        </Link>
      </p>
      <button
        onClick={handleMatchOtp}
        className="bg-[#b278fb]
         text-white  py-3 rounded-full w-full mt-10 hover:bg-white hover:text-[#b278fb] duration-200"
      >
        Verify
      </button>
    </div>
  );
};

export default Verify;
