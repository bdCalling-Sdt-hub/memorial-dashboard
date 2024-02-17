import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    about: {}
  };

export const UpdateAbout = createAsyncThunk(
    'UpdateAbout',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/update/about`, value, {
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



export const UpdateAboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(UpdateAbout.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(UpdateAbout.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.about= action.payload;
        }),
        builder.addCase(UpdateAbout.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.about= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default UpdateAboutSlice.reducer