import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();
const CategoryContextDispatcher = createContext();
const CategoryProvider = ({ children }) => {
  const [selected, setSelected] = useState("All");
  return (
    <CategoryContext.Provider value={selected}>
      <CategoryContextDispatcher.Provider value={setSelected}>
        {children}
      </CategoryContextDispatcher.Provider>
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

export const useCategoty = () => useContext(CategoryContext);
export const useCategoryAction = () => useContext(CategoryContextDispatcher);
