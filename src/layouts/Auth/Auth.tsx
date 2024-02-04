import { Outlet } from "react-router-dom";
import logo from "../../assets/Logo2.png";
import photo from "../../assets/Rectangle 3.png"

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
<<<<<<< HEAD
          <img src={logo} className="w-20" alt="logo" />
          <h2 className="text-white text-xl">Memorial</h2>
=======
          <img src={logo} width={522} height={246}  alt="logo" />
>>>>>>> 61e375e64813e880a4750e6ce0fdab3080edae0c
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
