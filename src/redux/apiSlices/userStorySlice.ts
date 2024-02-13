import { AxiosError } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../Config";

const initialState = {
  error: false,
  success: false,
  loading: false,
  stories: [],
};

export const UserStory = createAsyncThunk(
  "UserStory",
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

export const UserStorySlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserStory.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(UserStory.fulfilled, (state, action) => {
        (state.error = false), (state.success = true), (state.loading = false);
        state.stories = action.payload.data.data;
      }),
      builder.addCase(UserStory.rejected, (state) => {
        (state.error = true), (state.success = false), (state.loading = false);
        state.stories = [];
      });
  },
});

// Action creators are generated for each case reducer function
//export const { } = userSlice.actions

export default UserStorySlice.reducer;
