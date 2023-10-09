import {createSlice} from '@reduxjs/toolkit';

const taskList = createSlice({
    name: 'taskList',
    initialState:{
       arr: ['work', 'work', 'work', 'walk', 'read'] 
    }, 
    reducers:{
        deleteTask: function (state, arr){
            
        }
    }
})