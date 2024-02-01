import { Table } from "antd";
import { useState } from "react";
import { IUser } from "../../types/user.interface";

const BlockAccounts = ({ searchText }: { searchText: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  console.log(searchText);

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
          <button
            className="text-primary"
            onClick={() => handleUnBlock(record?.no)}
          >
            Unblock
          </button>
        </div>
      ),
    },
  ];

  const handleUnBlock = (id: string | number) => {
    console.log(id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
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
        className="text-primary"
      />
    </div>
  );
};

export default BlockAccounts;
