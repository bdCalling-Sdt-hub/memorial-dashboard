import { Badge, Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import Notifications from "./Notifications";
import { Link, useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import Header from "../../layouts/Main/Header";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getPrivacy } from "../../redux/apiSlices/privacyPolicy/getPrivacySlice";
import { UpdatePrivacy } from "../../redux/apiSlices/privacyPolicy/updatePrivacySlice";
import axios from "axios";
import Swal from "sweetalert2";

const PrivacyPolicy = () => {
  const dispatch = useAppDispatch();
  const {privacy} = useAppSelector(state=> state.getPrivacy);
  console.log(privacy);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleUpdate = ()=>{
    dispatch(UpdatePrivacy({ id: privacy?.id, description: content}));
    /* axios.post("http://192.168.10.121:4000/api/update/privacy/",{ id: 1, description: content})
    .then(res=>{
      Swal.fire(
        'Good job!',
        res.data.message,
        
        'success'
      )
      dispatch(getPrivacy())
    }).catch(err=>{
      Swal.fire(
        'Oops!',
         err.response.data.message,
        'error'
      )
    }); */
  } 

  useEffect(()=>{
    dispatch(getPrivacy())
  }, [dispatch]);

  useEffect(()=>{
    setContent(privacy?.description);
  }, [privacy]);
  return (
    <div>
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
    <div>
      <Link to="/settings">
        <div className="flex items-center gap-4 mb-4">
          <RiArrowLeftSLine size={28} color="#0071E3" />
          <h1 className="text-[#0071E3] text-[25px] font-bold">Privacy Policy</h1>
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
        onClick={handleUpdate}
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
