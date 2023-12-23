const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((p) => p.id === action.payload.id);
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedProduct = { ...updatedCart[index] };
        updatedProduct.quantity++;
        updatedCart[index] = updatedProduct;
      }
      return { ...state, cart: updatedCart };
    }
    case "INC_PRODUCT_CART": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((p) => p.id === action.payload.id);
      const updatedProduct = { ...updatedCart[index] };
      updatedProduct.quantity++;
      updatedCart[index] = updatedProduct;
      return { ...state, cart: updatedCart };
    }
    case "DEC_PRODUCT_CART": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((p) => p.id === action.payload.id);
      const updatedProduct = { ...updatedCart[index] };
      updatedProduct.quantity--;
      updatedCart[index] = updatedProduct;
      return { ...state, cart: updatedCart };
    }
    case "DEL_PRODUCT_CART": {
      const updateCart = [...state.cart];
      const updatedCart = updateCart.filter((p) => p.id !== action.payload.id);
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};

export default CartReducer;
