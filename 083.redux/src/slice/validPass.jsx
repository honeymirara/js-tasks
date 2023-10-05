 import {createSlice} from '@reduxjs/toolkit'

const validPass = createSlice({
    name: 'validPass',
    initialState: {
        input:"",
        result: false,
    },
    reducers: {
        fillInp: function (state, params){
            return {...state, input: params.payload}
        },

        isValidPass: function (state){
            if(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/gm.test(state.input)) {
                return {...state, result:true};
            }else{
                return {...state, result:false};
            }
           
        }
    }
})

export const {fillInp, isValidPass} = validPass.actions
export default validPass.reducer 