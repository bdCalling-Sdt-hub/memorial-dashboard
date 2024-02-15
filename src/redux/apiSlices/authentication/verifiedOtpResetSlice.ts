import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const verifiedOtpReset = createAsyncThunk(
    'verifiedOtpReset',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/profile/edit/1?_method=PUT`);
            console.log(response);
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const verifiedOtpResetSlice = createSlice({
    name: 'profile',
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
            state.profile= action.payload.data.data
        }),
        builder.addCase(verifiedOtpReset.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default verifiedOtpResetSlice.reducer