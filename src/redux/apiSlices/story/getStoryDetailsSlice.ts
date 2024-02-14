import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    story: {}
  };

export const getStory = createAsyncThunk(
    'getStory',
    async (value: number, thunkApi) => {
        try{
            const response = await baseURL.get(`/details/story/${value}`);
            return response?.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getStorySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getStory.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getStory.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.story= action.payload;
        }),
        builder.addCase(getStory.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.story= {};
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getStorySlice.reducer