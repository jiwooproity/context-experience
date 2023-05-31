import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    id: number;
    value: number;
    limit: number;
};

const initialState: InitialState = {
    id: 1,
    value: 0,
    limit: 1,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus: (state, action) => {
            state.value += action.payload;
        },
        minus: (state, action) => {
            state.value -= action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
        plusLimit: (state, action) => {
            state.limit = action.payload;
        }
    }
});

export default counterSlice;
export const { plus, minus, reset, plusLimit } = counterSlice.actions;