import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";
const token =  localStorage.getItem('token');

const initialState = {
    error: false,
    success: false,
    loading: false,
    users: [],
    packeages: []
  };

export const AllUser = createAsyncThunk(
    'AllUser',
    async ({selectPackage, currentPage}:{selectPackage: number, currentPage: number}, thunkApi) => {
        try{
            if(selectPackage){
                const response = await baseURL.get(`/user/list?id=${selectPackage}&page=${currentPage}`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    }
                });
                console.log(response);
                return response?.data;
            }else{
                const response = await baseURL.get(`/user/list?page=${currentPage}`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    }
                });
                return response?.data;
            }
            
        }catch(error){
            const axiosError = error as AxiosError;
            const message = axiosError?.message;
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const allUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(AllUser.pending, (state)=> {
            state.loading= true
        }),
        builder.addCase(AllUser.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.users= action.payload.data;
            state.packeages=action.payload.subscribe_packag.original;
        }),
        builder.addCase(AllUser.rejected, (state)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.users= []
            state.packeages= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default allUserSlice.reducer