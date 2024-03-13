import { Modal, Table } from "antd";
import { useEffect, useState, useRef } from "react";
import { IUser } from "../../types/user.interface";
import ModelValue from "../../util/ModelValue";
import { LuEye } from "react-icons/lu";
import { AllUser } from "../../redux/apiSlices/allUserSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useReactToPrint } from "react-to-print";
import ImgConfig from "../../ImgConfig";
import { searchUser } from "../../redux/apiSlices/searchUserSlice";
import Spinner from "../Spinner";

const UsersTable = ({selectPackage, searchText}: {selectPackage: number, searchText:string}) => {
  const componentRef = useRef();
  const dispatch = useAppDispatch();
  const {users, loading} = useAppSelector(state => state.allUser);
  console.log(users)
  const {users: search} = useAppSelector(state => state.searchUser);
  const [user, setUser] = useState<IUser>()
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(()=> {
    dispatch(AllUser({currentPage, selectPackage}))
  },[dispatch, currentPage, selectPackage]);

  useEffect(()=>{
    if(searchText !== ''){
      dispatch(searchUser(searchText))
    }
  },[dispatch, searchText]);

  useEffect(()=>{
    setData(users)
  }, [users])

  useEffect(()=>{
    setData(search)
  }, [search])
  
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
    setIsModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });
  
  return (
    <>
      {
        loading
        ?
        <div className="w-full h-[650px] flex items-center justify-center">
          <Spinner size="large" />
        </div>
        :
        <Table
          columns={columns}
          dataSource={data?.data} 
          pagination={{
            pageSize: data?.per_page,
            showSizeChanger: false,
            total: data?.total,
            current: data?.current_page,
            onChange: handlePageChange,
          }}
        />
      }
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon
      > 
        <div ref={componentRef}>
          <ModelValue
            title={"User Details"}
            img={ user?.user?.image ? `${ImgConfig}${user?.user?.image}`  : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}
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
        </div>

        <div className="w-full">
            <button 
            onClick={handlePrint}
              className={`py-3 text-[18px] font-semibold rounded-lg w-full bg-[#0071E3] text-white `}
            >
              Print
            </button>
        </div>
      </Modal>
    </>
  );
};

export default UsersTable;