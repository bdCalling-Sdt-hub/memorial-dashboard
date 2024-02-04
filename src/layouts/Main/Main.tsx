import { useState } from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  const [open, setOpen] = useState(false);

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
