import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        console.log("addToCart",state.cart);
        state.cart.forEach((i)=>{
            console.log("i",i);
        })
    // console.log('actionPayload.identity', action.payload)
    // // console.log("addToCart--->",current(state));
    // // console.log("addToCart--->",initialState)
    //   let item = state.cart.find((item) => {
    //     console.log("insidefind: ", item);
    //     return item.id == action.payload.id
    //   } );

    //   console.log('item-->', item);

    //   if (item) {
    //     console.log("if");
    //     state = {
    //       ...state,
    //       cart: this.state.cart.map((item) => {
    //         return item.id === action.payload.id
    //           ? {
    //               ...item,
    //               quantities: item.quantities + 1,
    //             }
    //           : item;
    //       }),
    //       totalPrice: state.totalPrice + action.payload.price,
    //     };
    //   }else{
    //     console.log("else",state.cart, action.payload);
    //     state = {
    //             ...state,
    //             cart: [...state.cart, action.payload],
    //             totalPrice: state.totalPrice + action.payload.price,
    //     }
    //   }

      console.log("actionpayload",action.payload);
      state.cart = [...state.cart,action.payload];
    },
    removeFromCart: (state, action) => {
      console.log("removeFromCart", state);
    },
    addQuantity: (state, action) => {},
    removeQuantity: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
