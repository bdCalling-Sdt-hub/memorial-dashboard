import { Modal, Table } from "antd";
import { useState } from "react";
import { ITransaction } from "../../types/transaction.interface";
import ModelValue from "../../util/ModelValue";

const TransactionsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageSize = 7;
  const data = [
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
    {
      transactionId: "#ABD265654",
      date: "24-02-2024",
      recipientName: "10 Downing Street",
      phoneNo: 1564561202,
      country: "UK",
      amount: "$1200",
      actions: "button",
    },
  ];

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Recipient name",
      dataIndex: "recipientName",
      key: "recipientName",
    },
    {
      title: "Phone no",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
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
      render: (_: string, record: ITransaction) => (
        <div>
          <select
            className="border border-primary rounded"
            onChange={(e) => handleSelected(e, record)}
          >
            <option>Select</option>
            <option className="text-green-500" value="Approve">
              Approve
            </option>
            <option className="text-red-500" value="cancel">
              Cancel
            </option>
            <option className="text-primary" value="viewDetail">
              View Detail
            </option>
          </select>
        </div>
      ),
    },
  ];

  const handleSelected = (
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
