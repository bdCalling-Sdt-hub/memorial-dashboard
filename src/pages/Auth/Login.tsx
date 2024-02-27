import { IconLock, IconMail } from "@tabler/icons-react";
import { Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { login } from "../../redux/apiSlices/authentication/loginSlice";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useAppDispatch();
  const {isSuccess, user} = useAppSelector(state=> state.login);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const handleLogin=()=>{
    if(email && password){
      dispatch(login({email:email, password: password}))
      .then(response => {
        console.log(response)
        if(response?.payload.id){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate("/")
            location.reload();
          });
        }
        
      })
      .catch(error => {
        console.log(error)
      });
    }
    
  }
  return (
    <div className=" w-[342px] mx-auto">
      <h2 className="mb-12 text-2xl font-semibold text-[#0071E3]">Sign in to continue</h2>
      <form className="w-full space-y-2">
        <Input
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          size="large"
          placeholder="Enter your Email"
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
          name="password"
          size="large"
          onChange={(e)=>setPassword(e.target.value)}
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
        onClick={handleLogin}
        className="bg-[#0071E3] text-white text-[18px] font-normal w-full h-[56px] rounded-md mt-10"
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
