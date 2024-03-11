import { IconChevronLeft, IconMail } from "@tabler/icons-react";
import { Input, Form, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { forgetPassword } from "../../redux/apiSlices/authentication/forgetPasswordSlice";
import Swal from "sweetalert2";


const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: any) => {
    const {email} = values;
    localStorage.setItem("resetEmail", email)
    dispatch(forgetPassword({email : email}))
    .then(response=>{
      if(response?.type === "forgetPassword/fulfilled"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.payload,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate("/auth/verify")
        });
      }
    })
  };
  

  return (
    <div className=" w-[342px] mx-auto">
      <Link
        to="/auth/login"
        className="flex items-center text-[#0071E3] justify-start gap-4 mb-5 text-2xl font-medium"
      >
        {" "}
        <IconChevronLeft size={28} /> Forgot Password
      </Link>

      <p className="mb-[38px] text-base font-normal">
        Please enter your email address to recover your account.
      </p>

      <div className="w-full space-y-5">
        <Form
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email" 
            style={{marginBottom: "44px"}}
            rules={[
              {
                required: true,
                message: "Please enter Email!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your Email"
              prefix={<IconMail className="mr-2" color="#0071E3" size={24} />}
              style={{
                border: "1px solid #ffff",
                height: "52px",
                background: "white",
                borderRadius: "8px",
                outline: "none",
              }}
              bordered={false}
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              htmlType="submit"
              className="bg-[#0071E3]
            text-white  h-[56px] rounded-lg w-full hover:bg-white hover:text-[#0071E3] duration-200"
            >
            Send OTP
          </Button>
          </Form.Item>
        </Form>
        
        
      </div>
    </div>
  );
};

export default ForgetPassword;
