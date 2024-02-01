import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconPlus,
  IconUser,
} from "@tabler/icons-react";
import { Modal } from "antd";
import { useState } from "react";
import WorkersTable from "../../components/Workers/WorkersTable";
import HeadingText from "../../util/HeadingText";
import InputField from "../../util/InputField";
import SearchField from "../../util/SearchField";

const Workers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  console.log(searchText);
  return (
    <>
      <SearchField
        placeholder="Search by name/email/phone number"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 justify-end mb-3 cursor-pointer text-primary"
      >
        <IconPlus />
        <p>Add Worker</p>
      </div>
      <div className="rounded-md p-4   bg-white">
        <HeadingText>Workers List</HeadingText>
        <div className="mt-5">
          <WorkersTable />
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
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
         text-white mt-10 py-3 rounded-full w-full hover:bg-white hover:text-[#b278fb] duration-200"
          >
            Add Worker
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Workers;
