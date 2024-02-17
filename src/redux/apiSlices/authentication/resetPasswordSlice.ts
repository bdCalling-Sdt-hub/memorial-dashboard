import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    message: null,
  };

export const resetPassword = createAsyncThunk(
    'resetPassword',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/reset-pass`, value);
            return response?.data?.message;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const resetPasswordSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(resetPassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(resetPassword.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.message= action.payload;
        }),
        builder.addCase(resetPassword.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.message= null
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default resetPasswordSlice.reducer