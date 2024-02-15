import { IconChevronLeft, IconLock } from "@tabler/icons-react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { resetPassword } from "../../redux/apiSlices/authentication/resetPasswordSlice";
import { useState } from "react";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [passwords, setPassword] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const dispatch = useAppDispatch();
  const { message } = useAppSelector(state=> state.resetPassword)
  const emails= localStorage.getItem("resetEmail");
  const navigate = useNavigate();
  const handleResetPassword = () => {

    const value = {
      email : emails as string,
      password: passwords as string,
      password_confirmation: currentPassword as string

    }

    dispatch(resetPassword(value))
      .then(response => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: response.payload,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate("/auth/login")
          });
      })
      .catch(error => {
        console.log(error)
      });
  };

  return (
    <div className=" w-[342px] mx-auto">
      <Link
        to="/auth/forget-password"
        className="flex items-center text-[#0071E3] justify-start gap-4 mb-5 text-2xl font-medium"
      >
        {" "}
        <IconChevronLeft size={38} /> Reset Password
      </Link>

      <p className="mb-[38px] text-base font-normal">
        Set a new password and it should be 8-10 characters long.
      </p>

      <form className="w-full space-y-2">
        <Input.Password
          size="large"
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter your password"
          prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
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
        <Input.Password
          size="large"
          onChange={(e)=>setCurrentPassword(e.target.value)}
          placeholder="Re-Enter your password"
          prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
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
      </form>

      <button
        onClick={handleResetPassword}
        className="bg-[#0071E3]
        text-white  h-[56px] rounded-lg text-lg font-semibold w-full mt-10 hover:bg-white hover:text-[#0071E3] duration-200"
      >
        Reset password
      </button>
    </div>
  );
};

export default ResetPassword;
