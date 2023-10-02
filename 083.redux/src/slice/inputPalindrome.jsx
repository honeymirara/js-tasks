import { createSlice } from '@reduxjs/toolkit';

const inputPalindrome = createSlice({
    name: 'inputPalindrome',
    initialState: {
        input: '',
        result: false
    },
    reducers: {
        check: function (state) {
            const newStr = state.input.trim().split('').reverse().join('')
           
            return {...state, result: state.input.trim() === newStr ? true: false}
        },
        fillInput: function (state, params) {
            return { ...state, input: params.payload }
        }
    }
})

export const { check, fillInput } = inputPalindrome.actions
export default inputPalindrome.reducer