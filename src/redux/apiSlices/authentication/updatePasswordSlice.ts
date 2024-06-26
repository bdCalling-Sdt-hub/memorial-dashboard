import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const updatePassword = createAsyncThunk(
    'updatePassword',
    async (value:any, thunkApi) => {
        try{
            const response = await baseURL.post(`/update-pass`, value, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            console.log(message);
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const updatePasswordSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(updatePassword.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(updatePassword.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload;
        }),
        builder.addCase(updatePassword.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default updatePasswordSlice.reducer