import { IconChevronLeft, IconLock } from "@tabler/icons-react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleResetPassword = () => {
    navigate("/auth/login");
  };
  return (
    <div className="text-center">
      <Link
        to="/auth/forget-password"
        className="flex items-center justify-center gap-1 mb-2 text-lg font-bold"
      >
        {" "}
        <IconChevronLeft /> Reset Password
      </Link>

      <p className="mb-12">
        Set a new password and it should be 8-10 characters long.
      </p>

      <form className="w-full space-y-2">
        <Input.Password
          size="large"
          placeholder="Enter your password"
          prefix={<IconLock size={20} />}
          style={{
            borderBottom: "1px solid #b278fb",
            background: "transparent",
            borderRadius: "0",
            outline: "none",
            marginBottom: "20px",
          }}
          bordered={false}
        />
        <Input.Password
          size="large"
          placeholder="Enter your password"
          prefix={<IconLock size={20} />}
          style={{
            borderBottom: "1px solid #b278fb",
            background: "transparent",
            borderRadius: "0",
            outline: "none",
          }}
          bordered={false}
        />
      </form>

      <button
        onClick={handleResetPassword}
        className="bg-[#b278fb]
         text-white  py-3 rounded-full w-full mt-10 hover:bg-white hover:text-[#b278fb] duration-200"
      >
        Reset password
      </button>
    </div>
  );
};

export default ResetPassword;
