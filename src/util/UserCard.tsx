import HeadingText from "./HeadingText";
import ImgConfig from "../ImgConfig";
interface IUser {
  fullName: string;
  email: string;
  image: string;
  name: string;
}

const UserCard = ({ user }: { user: IUser }) => {
  const { name } = user;
  return (
    <div className="bg-[#E6F1FC] h-[57.5px] rounded-lg flex items-center gap-5 p-2">
      <img style={{width: "40px", height: "40px", borderRadius: "100%"}}  src={`${ImgConfig}${user?.user?.image}`} alt="" />
      <div>
        <HeadingText>{name}</HeadingText>
      </div>
    </div>
  );
};

export default UserCard;
