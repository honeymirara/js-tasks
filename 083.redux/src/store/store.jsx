import { configureStore } from '@reduxjs/toolkit'
import increment from '../slice/increment'

export const store = configureStore({
    reducer: { increment: increment },
})

export default store;