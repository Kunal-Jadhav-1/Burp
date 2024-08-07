import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: 'cart',
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.card.info.id !== action.payload);
        },
        clearCart: (state) => {
            return [];
        },
        updateCartItem: (state, action) => {
            return action.payload;
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.card.info.id === action.payload);
            if (item) {
                item.card.info.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.card.info.id === action.payload);
            if (item) {
                if (item.card.info.quantity > 1) {
                    item.card.info.quantity -= 1;
                } else {
                    return state.filter(cartItem => cartItem.card.info.id !== action.payload);
                }
            }
        }
    },
});

export const { addToCart, removeFromCart, clearCart, updateCartItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
