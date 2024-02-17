import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import users from "../../../public/db/users.json";
import HeadingText from "../../util/HeadingText";
import UserCard from "../../util/UserCard";

import React, { Suspense, useState } from "react";

const TransactionRatio = () => {
  const [year, setYear] = useState(2024)
  const Chart = React.lazy(() => import("./TransactionChart"));

  const items = [
    {
      label: <a href="#">2023</a>,
      key: "2023",
    },
    {
      label: <a href="#">2024</a>,
      key: "2024",
    },
    {
      label: <a href="#">2025</a>,
      key: "2025",
    },
    {
      label: <a href="#">2026</a>,
      key: "2026",
    },
  ];
  const onClick = ({ key }) => {
    setYear(key)
  };

  return (
    // <div className="grid grid-cols-3 gap-5 mt-4 overflow-hidden h-[310px]">
    <div className="overflow-hidden h-[325px] rounded-md">
      <div className="bg-white col-span-2 p-4">
        <div className="flex items-center justify-between mb-2">
          <HeadingText>Income Ratio</HeadingText>
          <Dropdown
            menu={{
              items,
              onClick
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {year}
                <DownOutlined
                  style={{
                    color: "#0071E3",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-[14px] h-[14px] rounded-full border-[2px] border-[#0071E3]"></div>
            <p className="text-[14px] font-normal text-[#717070]">This month</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[14px] h-[14px] rounded-full  border-[2px] border-[#8ABEF2]"></div>
            <p className="text-[14px] font-normal text-[#717070]">Last month</p>
          </div>
        </div>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <Chart  year={year}/>
        </Suspense>
      </div>

      {/* <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between mb-4">
          <HeadingText>User List</HeadingText>
          <Link to="/users" className="text-primary">
            See all
          </Link>
        </div>

        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div> */}
    </div>
  );
};

export default TransactionRatio;
