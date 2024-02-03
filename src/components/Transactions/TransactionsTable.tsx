import { Modal, Table } from "antd";
import { useState } from "react";
import { ITransaction } from "../../types/transaction.interface";
import ModelValue from "../../util/ModelValue";
import { LuEye } from "react-icons/lu";

const TransactionsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageSize = 7;
  const data = [
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Basic",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Premium",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Gold",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Basic",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Basic",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Basic",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Basic",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      name: "10 Downing Street",
      date: "24-02-2024",
      subscription: "Basic",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
  ];

  const columns = [
    {
      title: "Trx.ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
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
      render: () => (
        <LuEye onClick={()=>setIsModalOpen(true)} className="text-[#0071E3] cursor-pointer" size={22} />
      )
    },
  ];

  /* const handleSelected = (
    e: React.ChangeEvent<HTMLSelectElement>,
    value: ITransaction
  ) => {
    const selectedValue = e.target.value;

    if (selectedValue === "Approve") {
      alert("Approve");
    } else if (selectedValue === "cancel") {
      alert("cancel");
    } else {
      setIsModalOpen(true);
      console.log(value);
    }
  }; */

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
          total: 8,
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
          title={"Transaction Details"}
          keys={["Transaction ID", "Date", "Amount"]}
          values={["#transactionID", "20-3-2023", 2888]}
        />
        <ModelValue
          title={"Sender details"}
          keys={[
            "Sender name",
            "Sender email ",
            "Sender phone no",
            "Country",
            "Sender Currency",
          ]}
          values={[
            "Sender name",
            "Sender email ",
            "Sender phone no",
            "Country",
            "Sender Currency",
          ]}
        />
        <ModelValue
          title={"Recipient details"}
          keys={[
            "Recipient name",
            "Recipient email ",
            "Recipient phone no",
            "Country",
            "Recipient Currency",
          ]}
          values={[
            "Recipient name",
            "Recipient email ",
            "Recipient phone no",
            "Country",
            "Recipient Currency",
          ]}
        />
        <div className="flex  items-center mx-auto gap-2 mt-10">
          {["Approve", "Reject"].map((item) => (
            <button
              key={item}
              className={`py-3 rounded-full w-full ${
                item === "Approve"
                  ? "bg-primary text-white"
                  : "border border-primary text-primary"
              } `}
            >
              {item}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default TransactionsTable;
