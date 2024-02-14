import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";

const initialState = {
    error: false,
    success: false,
    loading: false,
    message: null,
  };

export const storyStatus = createAsyncThunk(
    'story status',
    async (value: any, thunkApi) => {
        try{
            console.log(value)
            const response = await baseURL.post(`/story/status`, value);
            console.log(response?.data?.data)
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const storyStatusSlice = createSlice({
    name: 'story status',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(storyStatus.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(storyStatus.fulfilled, (state, action)=> {
            console.log(action.payload.data)
            state.error= false;
            state.success= true;
            state.loading= false;
            state.message= action.payload;
        }),
        builder.addCase(storyStatus.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.message= null;
        })
    } 
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default storyStatusSlice.reducer;