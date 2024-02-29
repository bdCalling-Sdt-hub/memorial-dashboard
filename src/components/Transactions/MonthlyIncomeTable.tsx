import React, { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Modal, Table } from 'antd';
import moment from 'moment';
import { LuEye } from 'react-icons/lu';
import { getMonthlyIncome } from '../../redux/apiSlices/income/monthlyIncomeSlice';
import ModelValue from '../../util/ModelValue';
import { useReactToPrint } from "react-to-print";

const MonthlyIncomeTable = ({selectPackage}: {selectPackage: number}) => {
    const dispatch = useAppDispatch();
    const {income} = useAppSelector(state=> state.getMonthlyIncome);
    const [value, setValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      pageStyle: "",
    });

    useEffect(()=>{
        dispatch(getMonthlyIncome({selectPackage}))
    },[dispatch, selectPackage]);
    
    
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

              <div ref={componentRef}>
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
              </div>

                <div className="w-full">
                        <button
                        onClick={handlePrint}
                        className={`py-3 rounded-lg w-full bg-[#0071E3] text-white`}
                        >
                        Print
                        </button>
                </div>
            </Modal>
        </div>

    )
}

export default MonthlyIncomeTable