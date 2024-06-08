import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "./apiSlices/allUserSlice";
import searchUserSlice from "./apiSlices/searchUserSlice";
import getSubscriptionSlice from "./apiSlices/subscription/getSubscriptionSlice";
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
import getProfileSlice from "./apiSlices/authentication/getProfileSlice";
import registerSlice from "./apiSlices/authentication/registerSlice";
import loginSlice from "./apiSlices/authentication/loginSlice";
import editProfileSlice from "./apiSlices/authentication/editProfileSlice";
import emailVerificationSlice from "./apiSlices/authentication/emailVerificationSlice";
import forgetPasswordSlice from "./apiSlices/authentication/forgetPasswordSlice";
import resetPasswordSlice from "./apiSlices/authentication/resetPasswordSlice";
import updatePasswordSlice from "./apiSlices/authentication/updatePasswordSlice";
import verifiedOtpResetSlice from "./apiSlices/authentication/verifiedOtpResetSlice";
import getIncomeSlice from "./apiSlices/income/getIncomeSlice";
import dailyIncomeSlice from "./apiSlices/income/dailyIncomeSlice";
import weeklyIncomeSlice from "./apiSlices/income/weeklyIncomeSlice";
import monthlyIncomeSlice from "./apiSlices/income/monthlyIncomeSlice";
import getDashboardSlice from "./apiSlices/getDashboardSlice";
import getRecentTransactionSlice from "./apiSlices/getRecentTransactionSlice";
import getIncomeRationSlice from "./apiSlices/income/getIncomeRatioSlice";
import updateSubscriptionSlice from "./apiSlices/subscription/updateSubscriptionSlice";
import getNotificationsSlice from "./apiSlices/getNotificationsSlice";
import adminSlice from "./apiSlices/adminSlice";
import createServiceSlice from "./apiSlices/Services/createServiceSlice";
import getServiceSlice from "./apiSlices/Services/getAllServiceSlice";
import deleteServiceSlice from "./apiSlices/Services/deleteServiceSlice";

export const store = configureStore({
  reducer: {
    allUser: allUserReducer,
    allAdmin: adminSlice,
    searchUser: searchUserSlice,

    // subscription state start here
    getPackage: getPackageSlice,
    getSubscription: getSubscriptionSlice,
    updateSubscription: updateSubscriptionSlice,
    // subscription state end here

    // settings state start here
    getAbout: getAboutSlice,
    updateAbout : updateAboutSlice,
    getPrivacy: getPrivacySlice,
    updatePrivacy : updatePrivacySlice,
    getTermsCondition: getTermsConditionSlice,
    updateTermsCondition : updateTermsConditionSlice,
    // settings state end here

    // story state start here
    getStories : getStoriesSlice,
    getStoryDetails : getStoryDetailsSlice,
    storyRequest: storyRequestSlice,
    storyStatus: storyStatusSlice,
    // story state end here

    // authentication start here
    getProfile: getProfileSlice, // start here
    register: registerSlice,
    login: loginSlice,
    editProfile: editProfileSlice,
    emailVerification: emailVerificationSlice,
    forgetPassword: forgetPasswordSlice,
    resetPassword: resetPasswordSlice,
    updatePassword: updatePasswordSlice,
    verifiedOtp: verifiedOtpResetSlice,
    // authentication end here

    // income start here 
    getIncome : getIncomeSlice,
    getDailyIncome: dailyIncomeSlice,
    getWeeklyIncome: weeklyIncomeSlice,
    getMonthlyIncome: monthlyIncomeSlice,
    getIncomeRation: getIncomeRationSlice,
    // income end here

    getDashboard : getDashboardSlice,
    getRecentTransaction: getRecentTransactionSlice,
    getNotifications: getNotificationsSlice,

    // service
    createService: createServiceSlice,
    getService: getServiceSlice,
    deleteService: deleteServiceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
