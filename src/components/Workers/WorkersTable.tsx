import { Modal, Table } from "antd";
import { useState } from "react";
import { IUser } from "../../types/user.interface";
import ModelValue from "../../util/ModelValue";

const WorkersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      no: 1,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 2,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 3,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 4,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 5,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 6,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 7,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 8,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
    {
      no: 9,
      username: "Fahim",
      email: "fahim@gmail.com",
      phoneNo: 1564561202,
      actions: "button",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "User name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone no",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      key: "actions",

      render: (_: string, record: IUser) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="text-primary" onClick={() => handleView(record)}>
            View Details
          </button>
        </div>
      ),
    },
  ];

  const handleView = (value: IUser) => {
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
          total: 9,
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
          title={"Worker details"}
          keys={[
            "Worker name",
            "Worker email ",
            "Phone number",
            "Address",
            "Joining Date",
          ]}
          values={[
            "Fahim",
            "fahim@gmail.com",
            "0976554336",
            "Bangladesh",
            "24-10-2024",
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

export default WorkersTable;
