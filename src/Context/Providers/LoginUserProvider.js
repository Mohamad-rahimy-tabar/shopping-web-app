import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const UserContextDispatcher = createContext();
const LoginUserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  return (
    <UserContext.Provider value={user}>
      <UserContextDispatcher.Provider value={setUser}>{children}</UserContextDispatcher.Provider>
    </UserContext.Provider>
  );
};

export default LoginUserProvider;

export const useLoginUser = () => useContext(UserContext);
export const useLoginUserAction = () => useContext(UserContextDispatcher);
