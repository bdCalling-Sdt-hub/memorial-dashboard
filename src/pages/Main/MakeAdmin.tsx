import React, { useEffect, useState } from 'react'
import Header from '../../layouts/Main/Header'
import { Button, Modal, Table } from 'antd';
import Swal from 'sweetalert2';
import baseURL from '../../Config';
import { MdOutlineDelete } from "react-icons/md";

const MakeAdmin = () => {
    const [openAddModel, setOpenAddModel] = useState(false);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [admins, setAdmins] = useState([]);
    const [reFresh, setReFresh] = useState("");

    const handleMakeAdmin=async(e)=>{
        e.preventDefault();
        const response = await baseURL.post(`/add-admin`, 
            {
                fullName: fullName,
                email: email,
                password: password,
                userType: "SUPER ADMIN"
            }, 
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
        if(response.status === 200){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Created Make Admin Successfully",
                showConfirmButton: false,
                timer: 1500
            }).then(()=>{
                setOpenAddModel(false);
                setReFresh("done");
            })
        }

    }

    if(reFresh){
        setTimeout(()=>{
            setReFresh("")
        }, 1500)
    }

    useEffect(()=>{
        async function getAPi(){
          const response = await baseURL.get(`/show-admin`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          setAdmins(response?.data?.data);
          console.log(response);
        }
        getAPi();
    }, [reFresh !== ""]);



    const data = [
        {
          key: '1',
          name: 'Jusef',
          email: "thejusefDada@gmail.com",
          userType: 'ADMIN',
        },
        {
          key: '2',
          name: 'Jusef',
          email: "thejusefDada@gmail.com",
          userType: 'ADMIN',
        },
        {
          key: '3',
          name: 'Joe Black',
          email: "thejusefDada@gmail.com",
          userType: 'ADMIN',
        },
    ];

    const columns = [
        {
          title: 'Full Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'User Type',
          dataIndex: 'userType',
          key: 'userType',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <MdOutlineDelete size={25} color='red'/>
          ),
        },
      ];
    return (
        <div>
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>
            <div className='mb-6'>
                <div className='flex items-end justify-end w-full' >
                    <button onClick={()=>setOpenAddModel(true)} className='w-[164px] h-[36px] rounded-[8px] text-white bg-[#0071E3]'>
                        Make Admin
                    </button>
                </div>
            </div>

            <Table columns={columns} dataSource={data} pagination={false} />


            <Modal
                centered
                open={openAddModel}
                onCancel={() => setOpenAddModel(false)}
                width={500}
                footer={false}
            >
            <div>
                <h1 style={{marginBottom: "12px"}}>Make Admin</h1>
                <form onSubmit={handleMakeAdmin}>
                    <div>
                        <label>Full Name</label>
                        <div style={{
                            marginTop: "8px",
                            marginBottom: "10px"                            
                        }}>
                            <input 
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    border: "1px solid #0071E3",
                                    borderRadius: "8px",
                                    padding : "16px",
                                    color: "black",
                                    outline: "none",
                                    backgroundColor: "white",

                                }}
                                type="text" 
                                placeholder="Enter User Full Name"
                                name="category_name"
                                onChange={(e)=>setFullName(e.target.value)}
                            />
                        </div>


                        <label >Email</label>
                        <div style={{
                            marginTop: "10px",
                            marginBottom: "10px"                            
                        }}>
                            <input 
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    border: "1px solid #0071E3",
                                    borderRadius: "8px",
                                    padding : "16px",
                                    color: "black",
                                    outline: "none",
                                    backgroundColor: "white",

                                }}
                                type="text" 
                                placeholder="Enter User Email"
                                name="category_name"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <label >Password</label>
                        <div style={{
                            marginTop: "10px",
                            marginBottom: "10px"                            
                        }}>
                            <input 
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    border: "1px solid #0071E3",
                                    borderRadius: "8px",
                                    padding : "16px",
                                    color: "black",
                                    outline: "none",
                                    backgroundColor: "white",

                                }}
                                type="text" 
                                placeholder="Enter User Password"
                                name="category_name"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>

                        <label >User Type</label>
                        <div style={{
                            marginTop: "10px",
                            marginBottom: "10px"                            
                        }}>
                            <input 
                                style={{
                                    width: "100%",
                                    height: "52px",
                                    border: "1px solid #0071E3",
                                    borderRadius: "8px",
                                    padding : "16px",
                                    color: "black",
                                    outline: "none",
                                    backgroundColor: "white",

                                }}
                                type="text" 
                                placeholder="ADMIN"
                                name="ADMIN"
                                readOnly
                            />
                        </div>
                    </div>

                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        style={{
                            width : "100%",
                            height: "45px",
                            fontWeight: "400px",
                            fontSize: "18px",
                            background: "#0071E3",
                            marginTop : "30px"
                        }}
                    >
                        Save
                    </Button>
                </form>
            </div>
            </Modal>
        </div>
    )
}

export default MakeAdmin