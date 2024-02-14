import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    about: {}
  };

export const getAbout = createAsyncThunk(
    'getAbout',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/edit/about/1`);
            console.log(response?.data);
            return response?.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getAboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getAbout.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getAbout.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.about= action.payload
        }),
        builder.addCase(getAbout.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.about= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getAboutSlice.reducer