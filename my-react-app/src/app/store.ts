import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "@/features/main/mainSlice";
import bannerReducer from "@/features/banner/bannerSlice";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        banner: bannerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
