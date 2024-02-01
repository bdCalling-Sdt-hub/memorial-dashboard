import HeadingText from "./HeadingText";

interface IUser {
  name: string;
  email: string;
  image: string;
}

const UserCard = ({ user }: { user: IUser }) => {
  const { name, email, image } = user;
  return (
    <div className="flex items-center gap-5">
      <img src={image} alt="" />
      <div>
        <HeadingText>{name}</HeadingText>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
