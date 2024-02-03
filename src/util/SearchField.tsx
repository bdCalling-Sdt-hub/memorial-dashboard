import { IconSearch } from "@tabler/icons-react";
import { Input } from "antd";
import { IoClose } from "react-icons/io5";

interface ISearch {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<ISearch> = ({ placeholder, onChange }) => {
  return (
    <div 
      className="
        w-[342px] 
        h-[52px] 
        rounded-[8px]
        border
        border-[#E8E8E9]
        "
      >

    
      <Input
        placeholder={placeholder}
        prefix={<IconSearch size={24} color="#0071E3"/>}
        suffix={<IoClose size={20} color="#2B2A2A" />}
         style={{
          width: "100%",
          height: "100%"
        }}
        onChange={onChange}
        size="middle"
      />
    </div>
  );
};

export default SearchField;
