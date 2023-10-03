import { createSlice } from '@reduxjs/toolkit';

const showHide = createSlice({
    name: 'showHide',
    initialState: {
        flag: false,
        result: ''

    },

    reducers: {
        show: function (state, data) {
            return { flag: true, result: 'Hi' }
        },
        hide: function (state, data) {
            return { flag: false, result: '' }
        }
    }
})

export const { show, hide } = showHide.actions
export default showHide.reducer 