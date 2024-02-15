import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    message: null,
  };

interface IEmail{
    email: string
}
export const forgetPassword = createAsyncThunk(
    'forgetPassword',
    async (email: IEmail, thunkApi) => {
        try{
            console.log(email)
            const response = await baseURL.post(`/forget-pass`, email);
            console.log(response)
            return response?.data?.message;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const forgetPasswordSlice = createSlice({
    name: 'forget password',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(forgetPassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(forgetPassword.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.message= action.payload
        }),
        builder.addCase(forgetPassword.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.message= null
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default forgetPasswordSlice.reducer