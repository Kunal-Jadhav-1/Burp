import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: 'cart',
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.card.info.id !== action.payload.id);
        },
        clearCart: (state) => {
            return [];
        },
        updateCartItem: (state, action) => {
            return action.payload;
        },
    },
});

export const { addToCart, removeFromCart, clearCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
