import { Modal, Table } from "antd";
import { useEffect, useState, useRef } from "react";
import ModelValue from "../../util/ModelValue";
import { LuEye } from "react-icons/lu";
import photo from "../../assets/Rectangle 14.jpg"
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getDailyIncome } from "../../redux/apiSlices/income/dailyIncomeSlice";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import ImgConfig from "../../ImgConfig"

const TransactionsTable = ({selectPackage}: {selectPackage: number}) => {
  const dispatch = useAppDispatch();
  const {income} = useAppSelector(state=> state.getDailyIncome);
  const {profile} = useAppSelector(state=> state.getProfile);
  const [value, setValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const componentRef = useRef();

  useEffect(()=>{
    dispatch(getDailyIncome({page, selectPackage}))
  },[dispatch, page, selectPackage]);


  const handleGetValue=(data)=>{
    setValue(data);
    setIsModalOpen(true)
  }

  const columns = [
    {
      title: "Trx.ID",
      dataIndex: "tx_ref",
      key: "tx_ref",
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
      render: (created_at: string) => 
        <p>{moment(created_at).format('L')}</p>

    },
    {
      title: "Subscription",
      dataIndex: "subscription",
      key: "subscription",
      render: (subscription: string) => 
        <p className={`
          ${subscription === "Premium" && "text-[#0071E3]"}
          ${subscription === "Gold" && "text-[#E8B40A]"}
        `}
      >{subscription}</p>
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      key: "actions",
      render: (_, data:any) => (
        <LuEye 
          onClick={()=>handleGetValue(data)} 
          className="text-[#0071E3] cursor-pointer" 
          size={22} 
        />
      )
    },
  ];

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });
  return (
    <div>
      <Table
        columns={columns}
        dataSource={income.data}
        pagination={{
          pageSize: income?.per_page,
          showSizeChanger: false,
          total: income.total,
          current: income.current_page,
          onChange: handlePageChange,
        }}
      />
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <div ref={componentRef}>
          <ModelValue
            title={"User details"}
            img={`${ImgConfig}${value?.user?.image}`}
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
              "Premium",
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
        <div className="">
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

export default TransactionsTable;
