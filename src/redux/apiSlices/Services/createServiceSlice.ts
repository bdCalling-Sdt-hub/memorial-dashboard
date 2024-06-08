import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false
  };

export const createService = createAsyncThunk(
    'createService',
    async (value: FormData, thunkApi) => {
        try{

            const response = await baseURL.post(`/service`, value, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data?.message ;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const createServiceSlice = createSlice({
    name: 'createService',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(createService.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(createService.fulfilled, (state)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(createService.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
})

export default createServiceSlice.reducer