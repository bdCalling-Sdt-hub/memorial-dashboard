import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const getProfile = createAsyncThunk(
    'getProfile',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/profile`, {
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${token}`,
                }
            });
            console.log(response)
            return response?.data?.user;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getProfile.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getProfile.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload;
        }),
        builder.addCase(getProfile.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getProfileSlice.reducer