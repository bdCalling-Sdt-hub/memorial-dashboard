import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    income: []  
};


export const getIncome = createAsyncThunk(
    'getIncome',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/income?packagId=1`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            })
            return response.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getIncomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getIncome.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getIncome.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.income= action.payload;
        }),
        builder.addCase(getIncome.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.income= [];
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getIncomeSlice.reducer