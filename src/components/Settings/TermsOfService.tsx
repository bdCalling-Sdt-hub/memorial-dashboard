import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import Header from "../../layouts/Main/Header";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getTermsCondition } from "../../redux/apiSlices/term&condition/getTermsConditionSlice";
import { UpdateTermsCondition } from "../../redux/apiSlices/term&condition/updateTermsConditionSlice";
import Swal from "sweetalert2";

const TermsOfService = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { term, } = useAppSelector(state=> state.getTermsCondition);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const handleUpdate = () => {
    dispatch(UpdateTermsCondition({ id: term?.id, description: content})).then(response => {
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

    dispatch(getTermsCondition())
  };
  

  useEffect(()=>{
    dispatch(getTermsCondition())
  }, [dispatch]);

  useEffect(()=>{
    setContent(term?.description);
  }, [term]);
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

export default TermsOfService;
