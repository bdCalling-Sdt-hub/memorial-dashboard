import { Modal, Table } from "antd";
import { useState } from "react";
import { IUser } from "../../types/user.interface";
import ModelValue from "../../util/ModelValue";
import { LuEye } from "react-icons/lu";

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      no: 1,
      username: "Tushar",
      email: "freelancerrtushar@gmail.om",
      phoneNo: 1564561202,
      subcriptions: "Basic",
      actions: "button",
    },
    {
      no: 2,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      subcriptions: "Premium",
      actions: "button",
    },
    {
      no: 3,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      subcriptions: "Gold",
      actions: "button",
    },
    {
      no: 4,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      subcriptions: "Basic",
      actions: "button",
    },
    {
      no: 5,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      subcriptions: "Basic",
      actions: "button",
    },
    {
      no: 6,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      subcriptions: "Basic",
      actions: "button",
    },
    {
      no: 7,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      subcriptions: "Basic",
      actions: "button",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "no",
      recipientName: "no",
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Subcriptions",
      dataIndex: "subcriptions",
      key: "subcriptions",
      render: (subscription: string) => 
        <p className={`
          ${subscription === "Premium" && "text-[#0071E3]"}
          ${subscription === "Gold" && "text-[#E8B40A]"}
        `}
      >{subscription}</p>
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      key: "actions",
      render: (_: string, record: IUser) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <LuEye onClick={() => handleView(record)} className="text-[#0071E3] cursor-pointer" size={22} />
        </div>
      ),
    },
  ];

  const handleView = (value: IUser) => {
    console.log(value);
    setIsModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize,
          showSizeChanger: false,
          total: 7,
          current: currentPage,
          onChange: handlePageChange,
        }}
      />
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <ModelValue
          title={"User Details"}
          keys={[
            "User name",
            "User email ",
            "Phone number",
            "Address",
            "Joining Date",
          ]}
          values={[
            "Fahim",
            "fahim@gmail.com",
            "0976554336",
            "Bangladesh",
            "USD",
          ]}
        />
        <div className="flex  items-center mx-auto gap-2 mt-10">
          {["Download", "Block"].map((item) => (
            <button
              key={item}
              className={`py-3 rounded-full w-full ${
                item === "Download"
                  ? "bg-primary text-white"
                  : "border border-primary text-primary"
              } `}
            >
              {item}
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default UsersTable;
