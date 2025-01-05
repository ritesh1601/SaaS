import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlice'
export const store = configureStore({
    reducer : {
        // Define your slices here
        Cart : cartReducer,
    },
    devTools:true,
})
