import { IconChevronLeft, IconMail } from "@tabler/icons-react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/auth/verify");
  };
  return (
    <div className="text-center">
      <Link
        to="/auth/login"
        className="flex items-center justify-center gap-1 mb-2 text-lg font-bold"
      >
        {" "}
        <IconChevronLeft /> Forget Password
      </Link>

      <p className="mb-12">
        Please enter your email address to recover your account.
      </p>
      <form onSubmit={handleSubmit} className="w-full space-y-5">
        <Input
          size="large"
          placeholder="Enter your password"
          prefix={<IconMail size={20} />}
          style={{
            borderBottom: "1px solid #b278fb",
            background: "transparent",
            borderRadius: "0",
            outline: "none",
            marginBottom: "20px",
          }}
          bordered={false}
        />
        <button
          type="submit"
          className="bg-[#b278fb]
         text-white  py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
