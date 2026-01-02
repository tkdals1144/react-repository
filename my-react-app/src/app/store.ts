import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./../features/banner/bannerSlice";
import headerReducer from "./../features/header/headerSlice";

export const store = configureStore({
    reducer: {
        score: scoreReducer,
        header: headerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
