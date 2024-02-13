import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "./apiSlices/allUserSlice";
import searchUserSlice from "./apiSlices/searchUserSlice";
import editSubscriptionSlice from "./apiSlices/editSubscriptionSlice";


export const store = configureStore({
    reducer: {
       allUser: allUserReducer,
       searchUser : searchUserSlice,
       editSubscription : editSubscriptionSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch