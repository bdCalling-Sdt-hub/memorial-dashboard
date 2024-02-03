import { Badge, Button } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import Notifications from "./Notifications";
import { Link, useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";

const PrivacyPolicy = () => {
 const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState("");
  const handleNavigate = (value: string) => {
    if (value === "notification") {
      return;
    } else if (value === "hidden-fee") {
      return;
    } else if (value === "hidden-fee-percentage") {
      setModelTitle("Set hidden fee percentage");
      setIsModalOpen(true);
    } else if (value === "change-password") {
      setModelTitle("Change password");
      setIsModalOpen(true);
    } else {
      navigate(`/settings/${value}`);
    }
  };
  return (
    <div>
      <div className="flex justify-end items-center gap-4 mb-5">
        <div onClick={()=>setOpen(!open)} className="relative cursor-pointer w-[48px] flex items-center justify-center h-[48px] p-2 bg-white rounded-full">
          <Badge style={{ background: "#0071E3", right: "-8px" }} count={5}>
            <FiBell size={24} />
          </Badge>
          {
            open &&
            <div className="p-4 absolute border border-[#0071E3] rounded-b-[16px] z-20 w-[251px] h-[350px] top-8 right-4 bg-white">
              <Notifications/>
              <p className="text-[#0071E3] text-[18px] font-medium text-center " onClick={handleNavigate}>View all</p>
            </div>
          }
        </div>
        <Link className="flex items-center gap-3" to="/settings/profile">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h3 className="text-[#0071E3] font-medium text-[14px] text-center">Jane Cooper</h3>
            <p className="text-right font-semibold text-[14px]">Admin</p>
          </div>
        </Link>
      </div>
    <div>
      <h1 style={{fontSize:"25px",fontWeight:"bold",marginBottom:"10px"}}>Privacy Policy</h1>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />

      <Button
        block
        style={{
          marginTop: "30px",
          backgroundColor: "#0071e3",
          color: "#fff",
          height: "50px",
        }}
      >
        Update
      </Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
