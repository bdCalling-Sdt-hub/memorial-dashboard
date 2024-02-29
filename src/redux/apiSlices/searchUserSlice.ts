import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    users: [],
  };

export const searchUser = createAsyncThunk(
    'searchUser',
    async (keyword: string, thunkApi) => {
        try{
            const response = await baseURL.get(`/search/subscrib/user?name=${keyword}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const searchUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(searchUser.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(searchUser.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.users= action.payload
        }),
        builder.addCase(searchUser.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.users= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default searchUserSlice.reducer