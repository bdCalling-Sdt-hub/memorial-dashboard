import React, { useEffect, useState } from 'react'
import Header from '../../layouts/Main/Header'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getDashboard } from '../../redux/apiSlices/getDashboardSlice';
import baseURL from "../../Config";
import Swal from 'sweetalert2';
import { Button, Modal } from 'antd';

const Categories = () => {
    const [openAddModel, setOpenAddModel] = useState(false);
    const [categories, setCategories] = useState([]);
    const [reFresh, setReFresh] = useState("")
    const [name, setName] = useState("");
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");
    const [editName, setEditName] = useState("");


    useEffect(()=>{
        async function getAPi(){
          const response = await baseURL.get(`/show/category`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          setCategories(response?.data?.data);
        }
        getAPi();
    }, [reFresh !== ""]);

    if(reFresh){
        setTimeout(()=>{
          setReFresh("")
        }, 1500)
    }

    useEffect(()=>{
        if(value){
            setEditName(value?.category_name)
        }
    }, [value]);

    const handleChange= async(e)=>{
        e.preventDefault();
        if(name){
            const response = await baseURL.post(`/add-category`, {category_name: name}, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.status === 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Category Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then(()=>{
                    dispatch(getDashboard());
                    setOpenAddModel(false);
                    setReFresh("done")
                })
            }
        }
    }

    const handleEdit=async(e)=>{
        e.preventDefault();
        if(editName){
            const response = await baseURL.post(`/update-category/${value.id}`, {category_name: editName}, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.status === 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Category Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then(()=>{
                    setReFresh("done")
                    setValue("")
                })
            }
        }

    }
    return (
        <div>
            <div className="flex items-end justify-end mb-11">
                <Header/>
            </div>

            <div>
                <div className='flex items-end justify-end w-full' >
                    <button onClick={()=>setOpenAddModel(true)} className='w-[164px] h-[36px] rounded-[8px] text-white bg-[#0071E3]'>
                        Add catagory
                    </button>
                </div>
            </div>
            
            <div className='flex items-center gap-6 mt-10'>
                {
                    categories?.map((item, index)=>
                        <div key={index} className='bg-white border w-[211px] h-[95px] rounded-[8px] flex items-center justify-center'>
                            <div className='w-full px-6'>
                                <h2 className='text-center'>{item?.category_name}</h2>
                                <button onClick={()=>setValue(item)}  className='w-full mt-4 bg-[#0071E3] rounded-[8px] py-1 px-3 text-white'>Edit</button>
                            </div>
                        </div>
                    )
                }
            </div>


            <Modal
                centered
                open={openAddModel}
                onCancel={() => setOpenAddModel(false)}
                width={500}
                footer={false}
            >
            <div>
                <h1 style={{marginBottom: "12px"}}>Add Category</h1>
                <form onSubmit={handleChange}>
                    <div>
                        <label style={{marginBottom : "12px"}}>Category name</label>
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
                                placeholder="Enter Category name"
                                name="category_name"
                                onChange={(e)=>setName(e.target.value)}
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

            <Modal
                centered
                open={value}
                onCancel={() => setValue("")}
                width={500}
                footer={false}
            >
                <div>
                    <h1 style={{marginBottom: "12px"}}>Edit Category</h1>
                    <form onSubmit={handleEdit}>
                        <div>
                            <label style={{marginBottom : "12px"}}>Category name</label>
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
                                    placeholder="Enter Category name"
                                    name="category_name"
                                    value={editName}
                                    onChange={(e)=>setEditName(e.target.value)}
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

export default Categories