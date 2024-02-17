import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";
const token =  localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    packeages: []
  };

export const getDashboard = createAsyncThunk(
    'getDashboard',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/dashboard`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getDashboardSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getDashboard.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getDashboard.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.packeages=action.payload;
        }),
        builder.addCase(getDashboard.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.packeages= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getDashboardSlice.reducer