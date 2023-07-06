import { createSlice } from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        value: 10
    },
    reducers: {
        increase: (state) => {
            state.value++;
            return state;
        },
        decrease: (state) => {
            state.value--;
            return state;
        }
    }
});
export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;


