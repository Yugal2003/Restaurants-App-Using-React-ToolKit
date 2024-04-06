import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

const cartSlice = createSlice({
    name : "cartSlice",
    initialState,
    reducers : {
        addToCart : (state,action) => {
            const ItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

            if(ItemIndex >= 0){
                state.cart[ItemIndex].qnty +=1;
            }
            else{
                let temp = {...action.payload, qnty : 1}
                state.cart = [...state.cart, temp]
            }
        },

        removeToCart : (state,action) => {
            const ItemIndex_dec = state.cart.findIndex((item) => item.id === action.payload.id);

            if(state.cart[ItemIndex_dec].qnty >= 1){
                state.cart[ItemIndex_dec].qnty -= 1
            }
        },

        singleRemoveCart : (state,action) => {
            const data = state.cart.filter((ele) => ele.id !== action.payload);
            state.cart = data;
        },

        emptycartIteam:(state,action)=>{
            state.cart = []
        }
    }
})

export const {addToCart, removeToCart, singleRemoveCart,emptycartIteam } = cartSlice.actions;

export default cartSlice.reducer;