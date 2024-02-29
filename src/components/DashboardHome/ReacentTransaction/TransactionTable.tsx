import { Modal, Table } from "antd";
import { useState } from "react";
// import { ITransaction } from "../../../types/transaction.interface";
import ModelValue from "../../../util/ModelValue";
import { LuEye } from "react-icons/lu";
import photo from "../../../assets/Rectangle 14.jpg"
import moment from "moment";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getRecentTransaction } from "../../../redux/apiSlices/getRecentTransactionSlice";
import { useReactToPrint } from "react-to-print";
import ImgConfig from "../../../ImgConfig"

const TransactionTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('')
  const {transactions} = useAppSelector(state=> state.getRecentTransaction);
  const componentRef = useRef();

  useEffect(()=>{
    dispatch(getRecentTransaction())
  }, [dispatch])

  const data = transactions.slice(0, 5);

  const columns = [
    {
      title: "Trx.ID",
      dataIndex: "tx_ref",
      key: "tx_ref",
      render: (_:string, record:any) => (
        <p>{record?.tx_ref}</p>
      )
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (_: string, record: IUser) => (
        <p>{moment(record?.created_at).format('L')}</p>
      )
    },
    {
      title: "Subscription",
      dataIndex: "package_name",
      key: "package_name",
      render: (_: string, record) => 
      <p>{record?.package?.package_name}</p>
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      dataIndex: "actions",
      key: "actions",
      render: (_, data:any) => (
        <LuEye 
          onClick={()=>handleGetValue(data)} 
          className="text-[#0071E3] cursor-pointer" 
          size={22} 
        />
      )
    }
  ];

  const handleGetValue=(data)=>{
    setValue(data);
    setIsModalOpen(true)
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });
  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false} 
      />

      <Modal
        centered
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <div ref={componentRef}>
        <ModelValue
          
          title={"User details"}
          img={`${ImgConfig}/${value?.user?.image}`}
          keys={[
            "User Name",
            "email",
            "phone no",
            "Subscription",
          ]}
          values={[
            value?.user?.fullName,
            value?.user?.email,
            value?.user?.mobile ? value?.user?.mobile :"(480) 555-0103",
            value?.package?.package_name,
          ]}
        />

        <ModelValue
          title={"Transaction Details"}
          keys={["Transaction ID", "Date", "Amount", "Transaction time ", "Transaction amount "]}
          values={[
            value?.tx_ref, 
            moment(value?.created_at).format('L'), 
            value?.amount, 
            moment(value?.created_at).format('L'), 
            value?.amount
          ]}
        />
        </div>

        <div className="flex  items-center mx-auto gap-2 mt-10">
          <button
            onClick={handlePrint}
              className={`py-3 rounded-lg w-full bg-[#0071E3] text-white`}
            >
              Print
            </button>
        </div>
      </Modal>
    </div>
  );
};

export default TransactionTable;


{/* <p className={`
          ${subscription === "Premium" && "text-[#0071E3]"}
          ${subscription === "Gold" && "text-[#E8B40A]"}
        `}
      >{subscription}</p> */}