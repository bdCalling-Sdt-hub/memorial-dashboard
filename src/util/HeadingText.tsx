import { ReactNode } from "react";

interface IHeading {
  children: ReactNode;
}

const HeadingText: React.FC<IHeading> = ({ children }) => {
  return <h2 className="font-semibold text-lg text-gray-600">{children}</h2>;
};

export default HeadingText;
