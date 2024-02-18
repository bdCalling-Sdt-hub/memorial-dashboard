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

export const getSubscription = createAsyncThunk(
    'searchUser',
    async (id: number, thunkApi) => {
        try{
            const response = await baseURL.get(`/edit/subscription/${id}`, {
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



export const getSubscriptionSlice = createSlice({
    name: 'getSubscription',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getSubscription.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getSubscription.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.subscription= action.payload.data
        }),
        builder.addCase(getSubscription.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.subscription= {}
        })
    } 
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getSubscriptionSlice.reducer;