import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    term: {}
  };

export const getTermsCondition = createAsyncThunk(
    'getTerm&Condition',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/edit/terms/1`);
            return response?.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getTermsConditionSlice = createSlice({
    name: 'term&condition',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getTermsCondition.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getTermsCondition.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.term= action.payload;
        }),
        builder.addCase(getTermsCondition.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.term= {};
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getTermsConditionSlice.reducer