import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "./apiSlices/allUserSlice";
import searchUserSlice from "./apiSlices/searchUserSlice";
import editSubscriptionSlice from "./apiSlices/editSubscriptionSlice";
import StoryDetails from "./apiSlices/StoryDetails";
import storyRequest from "./apiSlices/storyRequest";
import userStorySlice from "./apiSlices/userStorySlice";
import getAboutSlice from "./apiSlices/getAboutSlice";
export const store = configureStore({
  reducer: {
    allUser: allUserReducer,
    searchUser: searchUserSlice,
    editSubscription: editSubscriptionSlice,
    storyDetails : StoryDetails,
    storyRequest : storyRequest,
    userStory : userStorySlice,
    getAbout: getAboutSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
