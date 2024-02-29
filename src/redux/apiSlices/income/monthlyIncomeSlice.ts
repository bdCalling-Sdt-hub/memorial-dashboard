import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');


interface ValueProps{
    selectPackage : number;
}

const initialState = {
    error: false,
    success: false,
    loading: false,
    income: []  
};


export const getMonthlyIncome = createAsyncThunk(
    'getMonthlyIncome',
    async (value: ValueProps, thunkApi) => {
        try{
            if(value?.selectPackage){
                const response = await baseURL.get(`/month/income?packagId=${value?.selectPackage}`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    }
                })
                return response?.data?.monthly_income;
            }else{
                const response = await baseURL.get(`/month/income?`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    }
                })
                return response?.data?.monthly_income;
            }
            
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getMonthlyIncomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getMonthlyIncome.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getMonthlyIncome.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.income= action.payload;
        }),
        builder.addCase(getMonthlyIncome.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.income= [];
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getMonthlyIncomeSlice.reducer