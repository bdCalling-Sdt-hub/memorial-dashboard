import { IconLock, IconMail } from "@tabler/icons-react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h2 className="mb-12 text-xl font-semibold">Sign in to continue</h2>
      <form className="w-full space-y-2">
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

        <p className="text-end text-[#b278fb] font-medium">
          <Link to="/auth/forget-password">Forget Password?</Link>
        </p>
      </form>

      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-primary text-white w-full py-2 rounded-md mt-10"
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
