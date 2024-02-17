import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";
const token =  localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    transactions: []
  };

export const getRecentTransaction = createAsyncThunk(
    'getRecentTransaction',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/recent/transection`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response.data.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getRecentTransactionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getRecentTransaction.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getRecentTransaction.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.transactions=action.payload;
        }),
        builder.addCase(getRecentTransaction.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.transactions= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getRecentTransactionSlice.reducer