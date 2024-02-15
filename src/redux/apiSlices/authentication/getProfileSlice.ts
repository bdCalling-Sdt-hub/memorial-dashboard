import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xMC4zNTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTcwNzk2ODIxNiwiZXhwIjoxNzA3OTcxODE2LCJuYmYiOjE3MDc5NjgyMTYsImp0aSI6InpiZEVjVmJEMTdLODk0UnUiLCJzdWIiOiIxNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.gIHagu4PayTXB3gNlCB6vK4p4CyTkAt1jFx_1S4G31Y"


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const getProfile = createAsyncThunk(
    'getProfile',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/profile`, {
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${token}`,
                }
            });
            console.log(response);
            return response?.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const getProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getProfile.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(getProfile.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload.data.data
        }),
        builder.addCase(getProfile.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default getProfileSlice.reducer