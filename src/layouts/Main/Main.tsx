import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-4  p-5 container mx-auto overflow-hidden">
      <Sidebar open={open} />
      <div
        className={`${"col-span-9"
        } w-full  text-black rounded-md"`}
      >
        <Header setOpen={setOpen} open={open} />
        <div className="mt-5 h-[calc(100vh-108px)] overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
