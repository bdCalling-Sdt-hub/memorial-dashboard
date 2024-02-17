import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getWeeklyIncome } from '../../redux/apiSlices/income/weeklyIncomeSlice';
import { Modal, Table } from 'antd';
import moment from 'moment';
import { LuEye } from 'react-icons/lu';
import ModelValue from '../../util/ModelValue';

const WeeklyIncomeTable = () => {
    const dispatch = useAppDispatch();
    const {income} = useAppSelector(state=> state.getWeeklyIncome);
    console.log(income);
    const {profile} = useAppSelector(state=> state.getProfile);
    const [value, setValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(()=>{
        dispatch(getWeeklyIncome())
    },[dispatch, page]);
    
    
    const handleGetValue=(data)=>{
        setValue(data);
        setIsModalOpen(true)
    }
    
    const columns = [
        {
          title: "Week No",
          dataIndex: "week_serial",
          key: "week_serial",
          render: (_: string, record) => (
            <p>{record?.week_serial}</p>
          )
        },
        {
          title: "Total User",
          dataIndex: "total_users",
          key: "total_users",
          render: (_: string, record) => (
            <p>{record?.total_users}</p>
          )
        },
        {
          title: "Amount",
          dataIndex: "weekly_amount",
          key: "weekly_amount",
          render: (_: string, record) => (
            <p>{record?.weekly_amount}</p>
          )
    
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
    
    return (
        <div>
            <Table
                columns={columns}
                dataSource={income}
                /* pagination={{
                    pageSize: income?.per_page,
                    showSizeChanger: false,
                    total: income.total,
                    current: income.current_page,
                    onChange: handlePageChange,
                }} */
            />
            <Modal
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                footer={[]}
            >


                <ModelValue
                    title={"Weekly Details"}
                    keys={[
                        "Week No", 
                        "Total Users", 
                        "Total Amount", 
                        "Date"
                    ]}
                    values={[
                        value?.week_serial, 
                        value?.total_users,
                        value?.weekly_amount, 
                        value?.start_of_week + " " + "-" +  " " +   value.end_of_week
                    ]}
                />

                <div className="flex  items-center mx-auto gap-2 mt-10">
                    {["Download", "Print"].map((item) => (
                        <button
                        key={item}
                        className={`py-3 rounded-lg w-full ${
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
        </div>

    )
}

export default WeeklyIncomeTable