import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');


interface ValueProps{
    page: number;
    selectPackage: number;
}

const initialState = {
    error: false,
    success: false,
    loading: false,
    income: []  
};


export const getDailyIncome = createAsyncThunk(
    'getDailyIncome',
    async (value: ValueProps, thunkApi) => {
        try{
            const {page, selectPackage} = value;
            if(selectPackage){
                const response = await baseURL.get(`/daily/income?packagId=${selectPackage}&page=${page}`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    }
                })
                return response.data.daily_transection;
            }else{
                const response = await baseURL.get(`/daily/income?page=${page}`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    }
                })
                
                return response.data.daily_transection;
            }
            
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getDailyIncomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getDailyIncome.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getDailyIncome.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.income= action.payload;
        }),
        builder.addCase(getDailyIncome.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.income= [];
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getDailyIncomeSlice.reducer