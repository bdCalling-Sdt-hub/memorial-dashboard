import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    privacy: {}
  };

export const getPrivacy = createAsyncThunk(
    'getPrivacy',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/edit/privacy/1`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response?.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getPrivacySlice = createSlice({
    name: 'pribacy',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getPrivacy.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getPrivacy.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.privacy= action.payload
        }),
        builder.addCase(getPrivacy.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.privacy= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getPrivacySlice.reducer