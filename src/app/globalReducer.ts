import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IGlobalState {
    count: number;
}

const initialState: IGlobalState = {
    count: 0
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
    }
});

export const { increment, decrement, incrementByAmount } = globalSlice.actions;
export const globalState = (state: RootState) => state.global;

export default globalSlice.reducer;
