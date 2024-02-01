import { Outlet } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Auth = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#b278fb] h-screen flex items-center justify-center">
        <div className="mx-auto space-y-2 mb-5">
          <img src={logo} className="w-20" alt="logo" />
          <h2 className="text-white text-xl">Russend</h2>
        </div>
      </div>
      <div className="bg-[#F7F2FF] h-screen flex items-center">
        <div className="w-4/6 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
