import { IconSearch } from "@tabler/icons-react";
import { Input } from "antd";

interface ISearch {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<ISearch> = ({ placeholder, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      prefix={<IconSearch color="#A1A1A1" />}
      style={{
        width: "600px",
        padding: "10px",
        borderRadius: "30px",
        marginBottom: "30px",
      }}
      onChange={onChange}
      size="middle"
    />
  );
};

export default SearchField;
