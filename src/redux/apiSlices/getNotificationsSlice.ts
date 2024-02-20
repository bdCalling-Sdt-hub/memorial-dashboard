import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";
const token =  localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    notifications: []
  };

export const getNotifications = createAsyncThunk(
    'getNotifications',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/admin-notification`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)

export const getNotificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getNotifications.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getNotifications.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false;
            state.notifications=action.payload;
        }),
        builder.addCase(getNotifications.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.notifications= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getNotificationsSlice.reducer