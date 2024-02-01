import { Input } from "antd";

const InputField = ({
  placeholder,
  iconType,
}: {
  placeholder: string;
  iconType: JSX.Element;
}) => {
  return (
    <Input
      size="large"
      placeholder={placeholder}
      prefix={iconType}
      style={{
        borderBottom: "1px solid #b278fb",
        background: "transparent",
        borderRadius: "0",
        outline: "none",
        marginBottom: "20px",
      }}
      bordered={false}
    />
  );
};

export default InputField;
