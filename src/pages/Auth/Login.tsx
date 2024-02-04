import { IconLock, IconMail } from "@tabler/icons-react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h2 className="mb-12 text-2xl font-semibold text-[#0071E3]">Sign in to continue</h2>
      <form className="w-full space-y-2">
        <Input
          size="large"
          placeholder="Enter your password"
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
        <Input.Password
          size="large"
          placeholder="Enter your password"
          prefix={<IconLock className="mr-2" color="#0071E3" size={24} />}
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

        <p className="text-end text-[#0071E3] text-lg font-semibold">
          <Link to="/auth/forget-password">Forget Password?</Link>
        </p>
      </form>

      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-[#0071E3] text-white text-[18px] font-normal w-full h-[56px] rounded-md mt-10"
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
