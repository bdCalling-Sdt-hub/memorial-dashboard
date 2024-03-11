import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const emails = localStorage.getItem("resetEmail");

const initialState = {
    error: false,
    success: false,
    loading: false,
    message: null,
};
interface valueProps{
    email: string;
    value: string;
}

export const verifiedOtpReset = createAsyncThunk(
    'verifiedOtpReset',
    async (value: valueProps, thunkApi) => {
        try{
            const response = await baseURL.post(`/verified-checker`, {email: emails, otp: value});
            return response?.data?.message;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.response.data.error;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const verifiedOtpResetSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(verifiedOtpReset.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(verifiedOtpReset.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.message= action.payload;
        }),
        builder.addCase(verifiedOtpReset.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.message= null
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default verifiedOtpResetSlice.reducer