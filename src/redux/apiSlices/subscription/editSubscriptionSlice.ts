import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');
const initialState = {
    error: false,
    success: false,
    loading: false,
    subscription: {},
  };

export const editSubscription = createAsyncThunk(
    'searchUser',
    async (keyword: number, thunkApi) => {
        try{
            const response = await baseURL.get(`/edit/subscription/${keyword}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const editSubscriptionSlice = createSlice({
    name: 'editSubscription',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(editSubscription.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(editSubscription.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.subscription= action.payload.data
        }),
        builder.addCase(editSubscription.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.subscription= {}
        })
    } 
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default editSubscriptionSlice.reducer;