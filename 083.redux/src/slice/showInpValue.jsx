import { createSlice } from '@reduxjs/toolkit'

const showInpValue = createSlice({
    name: 'showInpValue',
    initialState: '',
    reducers: {
        fillInp: function (state, params) {
            return params.payload
        }
    }
})

export const { fillInp } = showInpValue.actions;
export default showInpValue.reducer