import { IconChevronLeft, IconLock } from "@tabler/icons-react";
import { Input, Form, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { resetPassword } from "../../redux/apiSlices/authentication/resetPasswordSlice";
import Swal from "sweetalert2";
import { useState } from "react";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const emails= localStorage.getItem("resetEmail");
  const navigate = useNavigate();
  

  const handleResetPassword = (values:any) => {
    const value = {
      email : emails as string,
      password: values.password as string,
      password_confirmation: values.password_confirmation as string

    }

    dispatch(resetPassword(value))
      .then(response => {
          if(response.type === "resetPassword/fulfilled"){
            Swal.fire({
              position: "center",
              icon: "success",
              title: response.payload,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              navigate("/auth/login")
            });
          }
          if(response.type === "resetPassword/rejected"){
            Swal.fire({
              position: "center",
              icon: "error",
              title: response.payload,
              showConfirmButton: false,
              timer: 1500
            })
          }
          
      })
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

      <div className="w-full space-y-2">

        <Form onFinish={handleResetPassword}>

          <Form.Item
            name="password"
            style={{marginBottom: "16px"}}
            rules={[
              {
                required: true,
                message: "Please enter new password!",
              },
            ]}
          >
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
              }}
              bordered={false}
            />
          </Form.Item>


          <Form.Item
            name="password_confirmation"
            style={{marginBottom: 0}}
            rules={[
              {
                required: true,
                message: "Please Re-Enter password password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              // onChange={(e)=>setCurrentPassword(e.target.value)}
              placeholder="Re-Enter your password"
              prefix={<IconLock className="mr-2" size={24} color="#0071E3" />}
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
              text-white  h-[56px] rounded-lg text-lg font-semibold w-full mt-10 hover:bg-white hover:text-[#0071E3] duration-200"
            >
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>

      
    </div>
  );
};

export default ResetPassword;
