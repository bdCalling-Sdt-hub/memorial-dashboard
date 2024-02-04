import { Badge, Button } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import Notifications from "./Notifications";
import { Link, useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import Header from "../../layouts/Main/Header";

const TermsOfService = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
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
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
      <div>
      <Link to="/settings">
        <div className="flex items-center gap-4 mb-4">
          <RiArrowLeftSLine size={28} color="#0071E3" />
          <h1 className="text-[#0071E3] text-[25px] font-bold">Term of service</h1>
        </div>
      </Link>
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

export default TermsOfService;
