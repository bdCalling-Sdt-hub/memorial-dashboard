import { IconBellFilled, IconMenu2 } from "@tabler/icons-react";
import { Badge } from "antd";
import { Link } from "react-router-dom";

interface HeaderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <Link to="/settings/notifications" className="cursor-pointer">
          <Badge style={{ background: "#b278fb" }} count={5}>
            <IconBellFilled size={40} />
          </Badge>
        </Link>
        <Link to="/settings/profile">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
