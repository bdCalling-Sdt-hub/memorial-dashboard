import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import Header from "../../layouts/Main/Header";
import { RiArrowLeftSLine } from "react-icons/ri";
import { getAbout } from "../../redux/apiSlices/about/getAboutSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { UpdateAbout } from "../../redux/apiSlices/about/updateAboutSlice";
import Swal from 'sweetalert2';

const AboutUs = () => {
  const dispatch = useAppDispatch();
  const {about} = useAppSelector(state => state.getAbout);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  

  const handleUpdate = ()=>{
    dispatch(UpdateAbout({ id: about?.id , description : content}))
    .then(response => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Update Successfully",
        showConfirmButton: false,
        timer: 1500
      })
      })
      .catch(error => {
        console.log(error)
      });
  } 

    
  

  useEffect(()=>{
    dispatch(getAbout())
  }, [dispatch]);

  useEffect(()=>{
    setContent(about?.description);
  }, [about]);
  return (
    <div>
      <div className="flex items-end justify-end mb-11">
        <Header/>
      </div>
    <div>
      <Link to="/settings">
        <div className="flex items-center gap-4 mb-4">
          <RiArrowLeftSLine size={28} color="#0071E3" />
          <h1 className="text-[#0071E3] text-[25px] font-bold">About us</h1>
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

export default AboutUs;
