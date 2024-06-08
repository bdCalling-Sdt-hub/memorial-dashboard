import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false
};

interface ValueProps{
    id: number;
    data: any
}

export const updateService = createAsyncThunk(
    'updateService',
    async (value:ValueProps, thunkApi) => {
        const {id, data} = value;

        try{

            const response = await baseURL.post(`/service/${id}`, data, {
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



export const updateServiceSlice = createSlice({
    name: 'updateService',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(updateService.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(updateService.fulfilled, (state)=> {
            state.error= false,
            state.success= true,
            state.loading= false
        }),
        builder.addCase(updateService.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
        })
    }
})

export default updateServiceSlice.reducer