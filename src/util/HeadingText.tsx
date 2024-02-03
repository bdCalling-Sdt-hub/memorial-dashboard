import { ReactNode } from "react";

interface IHeading {
  children: ReactNode;
  color?: string;
}

const HeadingText: React.FC<IHeading> = ({ children, color }) => {
  return <h2 
    className={`
    font-semibold 
    text-lg
    ${color ? "text-[#0071E3]" : "text-gray-600"} 


    `}
    
    >
      {children}
    </h2>;
};

export default HeadingText;
