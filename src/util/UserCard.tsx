import HeadingText from "./HeadingText";

interface IUser {
  name: string;
  email: string;
  image: string;
}

const UserCard = ({ user }: { user: IUser }) => {
  const { name, email, image } = user;
  return (
    <div className="bg-[#E6F1FC] h-[57.5px] rounded-lg flex items-center gap-5 p-2">
      <img width={40} height={40} src={image} alt="" />
      <div>
        <HeadingText>{name}</HeadingText>
      </div>
    </div>
  );
};

export default UserCard;
