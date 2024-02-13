import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";


const initialState = {
    error: false,
    success: false,
    loading: false,
    users: [],
  };

export const AllUser = createAsyncThunk(
    'AllUser',
    async (value, thunkApi) => {
        try{
            const response = await baseURL.get(`/user/list`);
            return response.data;
        }catch(err: any){
            const message = err.message
            return thunkApi.rejectWithValue(message);
        }
        
    }
)



export const allUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(AllUser.pending, (state, action)=> {
            state.loading= true
        }),
        builder.addCase(AllUser.fulfilled, (state, action)=> {
            state.error= false,
            state.success= true,
            state.loading= false
            state.users= action.payload.data.data
        }),
        builder.addCase(AllUser.rejected, (state, action)=> {
            state.error= true,
            state.success= false,
            state.loading= false
            state.users= []
        })
    }
})

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default allUserSlice.reducer