import { AxiosError } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";

const initialState = {
  error: false,
  success: false,
  loading: false,
  story: [],
};

export const StoryRequest = createAsyncThunk(
  "StoryRequest",
  async (value, thunkApi) => {
    try {
      const response = await baseURL.get(`/user/list`);
      return response?.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const message = axiosError?.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const StoryRequestSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(StoryRequest.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(StoryRequest.fulfilled, (state, action) => {
        (state.error = false), (state.success = true), (state.loading = false);
        state.story = action.payload.data.data;
      }),
      builder.addCase(StoryRequest.rejected, (state) => {
        (state.error = true), (state.success = false), (state.loading = false);
        state.story = [];
      });
  },
});

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default StoryRequestSlice.reducer;
