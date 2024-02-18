import { Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { IUser } from "../../types/user.interface";
import ModelValue from "../../util/ModelValue";
import { LuEye } from "react-icons/lu";
import photo from "../../assets/Rectangle 14.jpg";
import { AllUser } from "../../redux/apiSlices/allUserSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state => state.allUser);
  const {users: search} = useAppSelector(state => state.searchUser);
  const [user, setUser] = useState<IUser>()
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(()=> {
    dispatch(AllUser(currentPage))
  },[dispatch, currentPage]);
  
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
        <p>{record?.user?.fullName}</p>
      ),
      onFilter: (value, record) => record.address.startsWith(value)
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_: string, record: IUser) => (
        <p>{record?.user?.email}</p>
      )
    },
    {
      title: "Phone number",
      dataIndex: "phoneNo",
      key: "phoneNo",
      render: (_: string, record: IUser) => (
        <p>{record?.user?.mobile ? record?.user?.mobile : "01756953936"}</p>
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
    setUser(value);
    console.log(value)
    setIsModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    <>
      <Table
        columns={columns}
        dataSource={users?.data}
        pagination={{
          pageSize: users?.per_page,
          showSizeChanger: false,
          total: users?.total,
          current: users?.current_page,
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
          values={[
            user?.user?.fullName as string,
            user?.user?.email as string,
            user?.user?.mobile ? user?.user?.mobile : "01756953936",
            "Bangladesh",
            user?.user?.currency as string,
          ]}
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
