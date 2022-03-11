import { createContext } from "react";
import Home from "../components/Home";

export const UserContext = () => {
  const UserContext = createContext(null);
  return (
    <UserContext.Provider value={"hi"}>
      <Home />
    </UserContext.Provider>
  );
};
