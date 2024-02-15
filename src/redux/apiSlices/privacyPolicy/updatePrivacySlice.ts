import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../Config";
const token = localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    privacy: {}
  };

export const UpdatePrivacy = createAsyncThunk(
    'updatePrivacy',
    async (value:string, thunkApi) => {
        try{
            console.log(value);
            const response = await baseURL.post(`/update/privacy/`, value, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                }
            });
            console.log(response?.data);
            return response?.data.data;
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const UpdateAboutSlice = createSlice({
    name: 'privacy',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(UpdatePrivacy.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(UpdatePrivacy.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.privacy= action.payload;
        }),
        builder.addCase(UpdatePrivacy.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.privacy= {}
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default UpdateAboutSlice.reducer