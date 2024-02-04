import { IconChevronLeft, IconLock } from "@tabler/icons-react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleResetPassword = () => {
    navigate("/auth/login");
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
