import { createSlice , createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find((item)=>item.name===action.payload.name);
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            }
            else{
                state.push(action.payload); // Immer allows this mutation-like syntax
            }
        },
        removeItem: (state, action) => {
            state.splice(state.findIndex(item => item.name === action.payload), 1); // Splice is more efficient for array manipulation
        },
    },
});

export const getItemSelector = createSelector(
    (state)=>state.cart,
    (state)=>state
)

export const {addItem , removeItem} =cartSlice.actions; 
export default cartSlice.reducer;
