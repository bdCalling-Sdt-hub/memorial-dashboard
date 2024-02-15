import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4xMC4zNTo4MDAwL2FwaS9sb2dpbiIsImlhdCI6MTcwNzk3Njc5NywiZXhwIjoxNzA4MjM1OTk3LCJuYmYiOjE3MDc5NzY3OTcsImp0aSI6Img3d0RKVm5mVWd1MFk1UVciLCJzdWIiOiIxNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.KWwbGyozy_OJV1HmY3dvfY0f2is0K62lGuOzwfRoepU"


const initialState = {
    error: false,
    success: false,
    loading: false,
    profile: {},
  };

export const editProfile = createAsyncThunk(
    'editProfile',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.post(`/profile/edit/1?_method=PUT`, value, {
                headers: {
                  "Content-Type": "application/json",
                  "adminToken": `Bearer ${token}`,
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



export const editProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(editProfile.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(editProfile.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.profile= action.payload.data.data
        }),
        builder.addCase(editProfile.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.profile= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default editProfileSlice.reducer