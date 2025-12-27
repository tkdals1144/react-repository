import { createSlice } from "@reduxjs/toolkit";

interface ScoreState {
    score: number;
}

const initialState: ScoreState = {
    score: 0,
};

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        increase(state) {
            state.score += 1;
        },
        decrease(state) {
            state.score -= 1;
        },
    },
});

export const { increase, decrease } = scoreSlice.actions;
export default scoreSlice.reducer;
