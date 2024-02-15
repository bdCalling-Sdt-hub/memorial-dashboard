import { IconChevronLeft, IconMail } from "@tabler/icons-react";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { forgetPassword } from "../../redux/apiSlices/authentication/forgetPasswordSlice";
import Swal from "sweetalert2";


const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { message} = useAppSelector(state=> state.forgetPassword);
  const [email, setEmail] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem("resetEmail", email)
    e.preventDefault();
    console.log(email);
    dispatch(forgetPassword({email : email}))
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
        navigate("/auth/verify")
      });
    }
  }, [message, navigate]);
  

  return (
    <div className=" w-[342px] mx-auto">
      <Link
        to="/auth/login"
        className="flex items-center text-[#0071E3] justify-start gap-4 mb-5 text-2xl font-medium"
      >
        {" "}
        <IconChevronLeft size={28} /> Forget Password
      </Link>

      <p className="mb-[38px] text-base font-normal">
        Please enter your email address to recover your account.
      </p>
      <form onSubmit={handleSubmit} className="w-full space-y-5">
        <Input
          size="large"
          placeholder="Enter your Email"
          onChange={(e)=>setEmail(e.target.value)}
          prefix={<IconMail className="mr-2" color="#0071E3" size={24} />}
          style={{
            border: "1px solid #ffff",
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
         text-white  h-[56px] rounded-lg w-full hover:bg-white hover:text-[#0071E3] duration-200"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
