import { Outlet } from "react-router-dom";
import logo from "../../assets/Logo2.png";

const Auth = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#0071E3] h-screen flex items-center justify-center">
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
