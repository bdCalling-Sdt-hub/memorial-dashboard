import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Modal, Table } from 'antd';
import moment from 'moment';
import { LuEye } from 'react-icons/lu';
import { getMonthlyIncome } from '../../redux/apiSlices/income/monthlyIncomeSlice';
import ModelValue from '../../util/ModelValue';

const MonthlyIncomeTable = () => {
    const dispatch = useAppDispatch();
    const {income} = useAppSelector(state=> state.getMonthlyIncome);
    const [value, setValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [page, setPage] = useState(1);


    useEffect(()=>{
        dispatch(getMonthlyIncome())
    },[dispatch]);
    
    
    const handleGetValue=(data)=>{
        setValue(data);
        setIsModalOpen(true)
    }
    
    const columns = [
        {
          title: "Months",
          dataIndex: "month_name",
          key: "month_name",
          render: (_: string, record) => (
            <p>{record?.month_name}</p>
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
          dataIndex: "count",
          key: "count",
          render: (_: string, record) => (
            <p className='text-[18px] font-medium'>{record?.count}</p>
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
              centered
              open={isModalOpen}
              onOk={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
              footer={[]}
            >


                <ModelValue
                    title={"Month Details"}
                    keys={[
                        "Month", 
                        "Total Users", 
                        "Total Amount", 
                    ]}
                    values={[
                        value?.month_name, 
                        value?.total_users,
                        "$"+value?.count,
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

export default MonthlyIncomeTable