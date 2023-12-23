import { createContext, useContext, useState } from "react";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={setProducts}>{children}</ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductAction = () => useContext(ProductContextDispatcher);
