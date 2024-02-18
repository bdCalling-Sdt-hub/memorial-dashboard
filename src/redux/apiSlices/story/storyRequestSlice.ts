import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');
const initialState = {
    error: false,
    success: false,
    loading: false,
    story: {},
  };

export const storyRequest = createAsyncThunk(
    'searchUser',
    async (page: number, thunkApi) => {
        try{
            const response = await baseURL.get(`/story/request?page=${page}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response?.data?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const storyRequestSlice = createSlice({
    name: 'storyRequest',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(storyRequest.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(storyRequest.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.story= action.payload;
        }),
        builder.addCase(storyRequest.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.story= {}
        })
    } 
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default storyRequestSlice.reducer;