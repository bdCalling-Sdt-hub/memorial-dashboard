import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');
console.log(token);

interface ValueProps{
    packagId : number;
    page: number;
}

const initialState = {
    error: false,
    success: false,
    loading: false,
    income: []  
};


export const getWeeklyIncome = createAsyncThunk(
    'getWeeklyIncome',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/weekly/income`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            })
            console.log(response);
            return response.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getWeeklyIncomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getWeeklyIncome.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getWeeklyIncome.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.income= action.payload;
        }),
        builder.addCase(getWeeklyIncome.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.income= [];
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getWeeklyIncomeSlice.reducer