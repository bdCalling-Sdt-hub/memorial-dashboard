import {
  IconEdit,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import InputField from "../../util/InputField";
import ModelValue from "../../util/ModelValue";

interface IProfile {
  isProfileEdit: boolean;
  setIsProfileEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<IProfile> = ({ isProfileEdit, setIsProfileEdit }) => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <div className="text-center">
          <img
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
            alt=""
            className="w-32 h-32 border border-primary rounded-full"
          />
          {isProfileEdit && (
            <div>
              <label
                htmlFor="img"
                className="text-primary cursor-pointer mt-4 font-bold block"
              >
                Change Image
              </label>
              <input type="file" className="hidden" name="" id="img" />
            </div>
          )}
        </div>
        <div>
          {!isProfileEdit && (
            <button
              onClick={() => setIsProfileEdit(true)}
              className="bg-primary text-white py-2 px-2 rounded-md flex items-center gap-2 mx-auto hover:bg-[#956ada] duration-100"
            >
              <IconEdit />
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <div className="mt-5">
        {!isProfileEdit && (
          <ModelValue
            keys={["Name", "Email", "Phone no", "Country"]}
            values={["Fahim", "fahim@gmail.com", "0162387665", "Bangladesh"]}
          />
        )}
        {isProfileEdit && (
          <form className="w-full">
            <InputField
              placeholder="Name"
              iconType={<IconUser color="#333333" size={20} />}
            />
            <InputField
              placeholder="Email"
              iconType={<IconMail color="#333333" size={20} />}
            />
            <InputField
              placeholder="Phone number"
              iconType={<IconPhone color="#333333" size={20} />}
            />
            <InputField
              placeholder="Country"
              iconType={<IconMapPin color="#333333" size={20} />}
            />

            <button
              type="submit"
              className="bg-[#b278fb]
         text-white mt-8 py-3 rounded-full w-full hover:bg-white hover:outline hover:text-[#b278fb] duration-200"
            >
              Save changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
