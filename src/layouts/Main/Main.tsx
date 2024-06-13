import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { getProfile } from "../../redux/apiSlices/authentication/getProfileSlice";

const Main = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(getProfile())
  },[dispatch]);
  
  

  return (
    <div className="grid grid-cols-12 gap-4  p-5 container mx-auto " style={{backgroundColor:"#D9EDFC"}}>
      <Sidebar open={open} />
      <div
        className={`${"col-span-9"
        } w-full  text-black rounded-md"`}
      >
        <div className="h-[calc(100vh-40px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
