import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";



interface ValueProps{
    catId : number;
    page: number;
}

const initialState = {
    error: false,
    success: false,
    loading: false,
    stories: []  
};


export const getStories = createAsyncThunk(
    'getStories',
    async (value: ValueProps, thunkApi) => {
        try{
            const {catId, page} = value;
            const response = await baseURL.get(`/user/story?catId=${catId}&page=${page}`);
            return response.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getStoriesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getStories.pending, (state)=> {
            state.loading= true;
        }),
        builder.addCase(getStories.fulfilled, (state, action)=> {
            state.error= false;
            state.success= true;
            state.loading= false;
            state.stories= action.payload;
        }),
        builder.addCase(getStories.rejected, (state)=> {
            state.error= true;
            state.success= false;
            state.loading= false;
            state.stories= [];
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getStoriesSlice.reducer