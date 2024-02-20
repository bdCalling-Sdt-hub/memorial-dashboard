import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getProfile } from "../../redux/apiSlices/authentication/getProfileSlice";

const Main = () => {
  const [open, setOpen] = useState(false);
  const navigate= useNavigate()
  const dispatch = useAppDispatch();
  const {profile} = useAppSelector(state=> state.getProfile);
  
  useEffect(()=>{
    dispatch(getProfile())
  },[dispatch]);
  
  /* useEffect(()=>{
    if(!profile?.id){
      navigate('/auth/login')
    }
  }, [profile?.id, navigate]) */
  return (
    <div className="grid grid-cols-12 gap-4  p-5 container mx-auto overflow-hidden" style={{backgroundColor:"#D9EDFC"}}>
      <Sidebar open={open} />
      <div
        className={`${"col-span-9"
        } w-full  text-black rounded-md"`}
      >
        <div className="h-[calc(100vh-40px)] overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
