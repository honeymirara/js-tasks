import { createSlice } from '@reduxjs/toolkit';

const inputValue = createSlice({
    name: 'inputValue',
    initialState: '',
    reducers: {
        fillInput: function (state, params){
            return params.payload
        }
    },
})

export const {fillInput} = inputValue.actions
export default inputValue.reducer 