import { Modal, Table } from "antd";
import { useState } from "react";
import { IUser } from "../../types/user.interface";
import ModelValue from "../../util/ModelValue";
import { LuEye } from "react-icons/lu";
import photo from "../../assets/Rectangle 14.jpg";
import { AllUser } from "../../redux/apiSlices/allUserSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state => state.allUser);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const columns = [
    {
      title: "#",
      dataIndex: "no",
      recipientName: "no",
      render: (_: string, record: IUser) => (
        <p>{record?.id}</p>
      )
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      render: (_: string, record: IUser) => (
        <p>{record?.name}</p>
      )
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_: string, record: IUser) => (
        <p>{record?.email}</p>
      )
    },
    {
      title: "Phone number",
      dataIndex: "phoneNo",
      key: "phoneNo",
      render: (_: string, record: IUser) => (
        <p>{record?.phoneNo}</p>
      )
    },
    {
      title: "Subcriptions",
      dataIndex: "subcriptions",
      key: "subcriptions",
      render: (_: string, record: IUser) => (
        <p>{record?.package?.package_name}</p>
      )
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
        dataSource={users}
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
        closeIcon
      >
        <ModelValue
          title={"User Details"}
          img={photo}
          keys={[
            "User name",
            "User email ",
            "Phone number",
            "Address",
            "Joining Date",
          ]}
          values={users?.user}
        />
        <div className="flex  items-center mx-auto gap-2 mt-10">
          {["Download", "Print"].map((item) => (
            <button
              key={item}
              className={`py-3 text-[18px] font-semibold rounded-lg w-full ${
                item === "Download"
                  ? "bg-[#0071E3] text-white"
                  : "border border-[#0071E3] text-[#0071E3]"
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
