import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./../features/banner/bannerSlice";

export const store = configureStore({
    reducer: {
        score: scoreReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
