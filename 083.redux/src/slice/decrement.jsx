import { createSlice } from '@reduxjs/toolkit';


const decrement = createSlice({
    name: 'decrement',
    initialState: 0,
    reducers: {

        countMinus: function (state) {
            return state - 1
        },

        countPlus: function (state) {
            return state + 1
        }
    }
})

export const { countMinus, countPlus } = decrement.actions
export default decrement.reducer;
