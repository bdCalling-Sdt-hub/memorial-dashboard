import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');


const initialState = {
    error: false,
    success: false,
    loading: false
};


export const deleteService = createAsyncThunk(
    'deleteService',
    async (value:number, thunkApi) => {
        try{
            const response = await baseURL.delete(`/service/${value}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response.data.message;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const deleteServiceSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(deleteService.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(deleteService.fulfilled, (state)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
        }),
        builder.addCase(deleteService.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
        })
    }
});

export default deleteServiceSlice.reducer