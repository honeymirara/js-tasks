import { configureStore } from '@reduxjs/toolkit'
import increment from '../slice/increment'
import decrement from '../slice/decrement'
import inputValue from '../slice/inputValue'
import inputPalindrome from '../slice/inputPalindrome'
import validEmail from '../slice/validEmail'
import sumInput from '../slice/sumInput'

export const store = configureStore({
    reducer: {
        increment: increment,
        decrement: decrement,
        inputValue: inputValue,
        inputPalindrome: inputPalindrome,
        validEmail: validEmail,
        sumInput: sumInput
    },

})

export default store;