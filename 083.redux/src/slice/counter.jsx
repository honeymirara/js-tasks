import {createSlice} from '@reduxjs/toolkit'

const counter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        sum: function (state){
            return  state + 5
        }
    }
})

export const {sum} = counter.actions;
export default counter.reducer