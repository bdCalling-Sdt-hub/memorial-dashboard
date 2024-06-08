import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    services: []
};

export const getService = createAsyncThunk(
    'getService',
    async (_value, thunkApi) => {
        try{
            const response = await baseURL.get(`/service`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getServiceSlice = createSlice({
    name: 'story',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getService.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getService.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.services= action.payload;
        }),
        builder.addCase(getService.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.services= [];
        })
    }
})

export default getServiceSlice.reducer