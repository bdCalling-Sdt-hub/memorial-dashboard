import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const PersonalDataPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>
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
          backgroundColor: "#b278fb",
          color: "#fff",
          height: "50px",
        }}
      >
        Update
      </Button>
    </div>
  );
};

export default PersonalDataPolicy;
