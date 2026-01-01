import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { HeaderModal } from "./type";

const initialState: HeaderModal = {
    activeModal: null,
};

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<"login" | "signup">) {
            state.activeModal = action.payload;
        },
        closeModal(state) {
            state.activeModal = null;
        },
    },
});

// 리듀서를 export 할 떄는... 이렇게 const 로 묶고...
export const { openModal, closeModal } = headerSlice.actions;
export default headerSlice.reducer;
