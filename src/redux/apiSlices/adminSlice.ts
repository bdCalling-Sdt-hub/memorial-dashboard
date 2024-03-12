import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";
const token =  localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    admins: [],
  };

export const AllAdmin = createAsyncThunk(
    'admins',
    async (value, thunkApi) => {
        try{
            
            const response = await baseURL.get(`/show-admin`, {
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



export const adminsSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(AllAdmin.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(AllAdmin.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.admins= action.payload.data;
        }),
        builder.addCase(AllAdmin.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.admins= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default adminsSlice.reducer;