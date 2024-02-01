import { FiBell } from "react-icons/fi";
import { Badge } from "antd";
import { Link } from "react-router-dom";

interface HeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <Link to="/settings/notifications" className="cursor-pointer">
          <div className="relative w-[48px] flex items-center justify-center h-[48px] p-2 bg-white rounded-full">
            <Badge style={{ background: "#0071E3", right: "-8px" }} count={5}>
              <FiBell size={24} />
            </Badge>
          </div>
        </Link>
        <Link to="/settings/profile">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
