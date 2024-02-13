import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "./apiSlices/allUserSlice";
import searchUserSlice from "./apiSlices/searchUserSlice";


export const store = configureStore({
    reducer: {
       allUser: allUserReducer,
       searchUser : searchUserSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch