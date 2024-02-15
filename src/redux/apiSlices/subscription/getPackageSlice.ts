import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    packages: [],
  };

export const allPackage = createAsyncThunk(
    'allPackage',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/package/show`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const allPackageSlice = createSlice({
    name: 'allPackage',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(allPackage.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(allPackage.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.packages= action.payload;
        }),
        builder.addCase(allPackage.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.packages= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default allPackageSlice.reducer