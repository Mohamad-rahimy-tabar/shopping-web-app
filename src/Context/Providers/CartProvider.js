import { createContext, useContext, useReducer } from "react";
import CartReducer from "../Reducers/CartReducer";
const CartContext = createContext();
const CartContextDispatcher = createContext();
const initialState = {
  cart: [],
  total: 0,
};
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>{children}</CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

//custom hook for use cart context
export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);
