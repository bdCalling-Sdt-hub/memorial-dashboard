import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    term: {}
  };

export const UpdateTermsCondition = createAsyncThunk(
    'updateTermsCondition',
    async (value:string, thunkApi) => {
        try{
            const response = await baseURL.post(`/update/terms`, value, {
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
    name: 'term',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(UpdateTermsCondition.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(UpdateTermsCondition.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.term= action.payload;
        }),
        builder.addCase(UpdateTermsCondition.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.term= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default UpdateAboutSlice.reducer