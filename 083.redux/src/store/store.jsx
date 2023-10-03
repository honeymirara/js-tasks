import { configureStore } from '@reduxjs/toolkit'
import increment from '../slice/increment'
import decrement from '../slice/decrement'
import inputValue from '../slice/inputValue'
import inputPalindrome from '../slice/inputPalindrome'
import showHide from '../slice/showHide'
import validEmail from '../slice/validEmail'
import sumInput from '../slice/sumInput'

export const store = configureStore({
    reducer: {
        increment: increment,
        decrement: decrement,
        inputValue: inputValue,
        inputPalindrome: inputPalindrome,
        showHide: showHide,
        validEmail: validEmail,
        sumInput: sumInput
    },

})

export default store;