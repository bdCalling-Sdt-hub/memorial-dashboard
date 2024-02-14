import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "./apiSlices/allUserSlice";
import searchUserSlice from "./apiSlices/searchUserSlice";
import editSubscriptionSlice from "./apiSlices/editSubscriptionSlice";
import getAboutSlice from "./apiSlices/about/getAboutSlice";
import updateAboutSlice from "./apiSlices/about/updateAboutSlice";
import getPrivacySlice from "./apiSlices/privacyPolicy/getPrivacySlice";
import updatePrivacySlice from "./apiSlices/privacyPolicy/updatePrivacySlice";
import getTermsConditionSlice from "./apiSlices/term&condition/getTermsConditionSlice";
import updateTermsConditionSlice from "./apiSlices/term&condition/updateTermsConditionSlice";
import getStoriesSlice from "./apiSlices/story/getStoriesSlice";
import getStoryDetailsSlice from "./apiSlices/story/getStoryDetailsSlice";
import storyRequestSlice from "./apiSlices/story/storyRequestSlice";
import storyStatusSlice from "./apiSlices/story/storyStatusSlice";
import getPackageSlice from "./apiSlices/subscription/getPackageSlice";

export const store = configureStore({
  reducer: {
    allUser: allUserReducer,
    searchUser: searchUserSlice,
    editSubscription: editSubscriptionSlice,
    getAbout: getAboutSlice,
    updateAbout : updateAboutSlice,
    getPrivacy: getPrivacySlice,
    updatePrivacy : updatePrivacySlice,
    getTermsCondition: getTermsConditionSlice,
    updateTermsCondition : updateTermsConditionSlice,
    getStories : getStoriesSlice,
    getStoryDetails : getStoryDetailsSlice,
    storyRequest: storyRequestSlice,
    storyStatus: storyStatusSlice,
    getPackage: getPackageSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
