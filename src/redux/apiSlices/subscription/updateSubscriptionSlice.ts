import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const updateSubscription = createAsyncThunk(
    'updateSubscription',
    async (value, thunkApi) => {
        try{
            console.log(value);
            const response = await baseURL.post(`/update/subscription`, value, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response);
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const updateSubscriptionSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(updateSubscription.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(updateSubscription.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload;
        }),
        builder.addCase(updateSubscription.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default updateSubscriptionSlice.reducer