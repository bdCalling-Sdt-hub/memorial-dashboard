import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token =  localStorage.getItem('token');


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const editProfile = createAsyncThunk(
    'editProfile',
    async (value, thunkApi) => {
        try{
            console.log(token, value)
            const response = await baseURL.post(`/profile/edit/1?_method=PUT`, value, {
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${token}`,
                }
            });
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const editProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(editProfile.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(editProfile.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload.data
        }),
        builder.addCase(editProfile.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default editProfileSlice.reducer