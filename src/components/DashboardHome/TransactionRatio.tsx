import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import users from "../../../public/db/users.json";
import HeadingText from "../../util/HeadingText";
import UserCard from "../../util/UserCard";

import React, { Suspense } from "react";

const TransactionRatio = () => {
  const Chart = React.lazy(() => import("./TransactionChart"));

  const items = [
    {
      label: <a href="#">2023</a>,
      key: "0",
    },
    {
      label: <a href="#">2024</a>,
      key: "1",
    },
    {
      label: <a href="#">2025</a>,
      key: "0",
    },
    {
      label: <a href="#">2026</a>,
      key: "1",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-4 overflow-hidden h-[310px]">
      <div className="bg-white rounded-md col-span-2 p-4">
        <div className="flex items-center justify-between mb-2">
          <HeadingText>Transaction Ratio</HeadingText>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                2024
                <DownOutlined
                  style={{
                    color: "#b278fb",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                />
              </Space>
            </a>
          </Dropdown>
        </div>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <Chart />
        </Suspense>
      </div>

      <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between mb-4">
          <HeadingText>User List</HeadingText>
          <Link to="/users" className="text-primary">
            See all
          </Link>
        </div>

        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default TransactionRatio;
