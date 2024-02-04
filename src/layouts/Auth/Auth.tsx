import { Outlet } from "react-router-dom";
import logo from "../../assets/Logo2.png";

const Auth = () => {
  return (
    <div className="grid grid-cols-2">
      <div 
        style={{
          backgroundImage: `url("https://res.cloudinary.com/ddqovbzxy/image/upload/v1707019944/qisrouccfiww0io7lviy.png")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: "100%",
          height: "100%"
        }}
        className="border h-screen flex items-center justify-center">
        <div className="mx-auto space-y-2 mb-5">
          <img src={logo} width={522} height={246}  alt="logo" />
        </div>
      </div>
      <div className="bg-[#E6F1FC] h-screen flex items-center">
        <div className="w-4/6 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
