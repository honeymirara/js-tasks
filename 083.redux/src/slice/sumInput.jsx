import { createSlice } from '@reduxjs/toolkit';



const sumInput = createSlice({
    name: 'sumInput',
    initialState: {
        inp1: '',
        inp2: '',
        result: 0
    },
    reducers: {
        fillInp1: function (state, params) {
            return { ...state, inp1: params.payload }
        },
        fillInp2: function (state, params) {
            return { ...state, inp2: params.payload }
        },

        isSumInput: function (state) {
            return { ...state, result: +state.inp1 + +state.inp2 }
        }
    }
})

export default sumInput.reducer;
export const { fillInp1, fillInp2, isSumInput } = sumInput.actions

