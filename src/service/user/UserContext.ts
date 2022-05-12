import { createContext, useContext } from "react";

export type UserData = {
  name: string;
  email: string;
};

type UserContextValue = {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export function useUserContext(): UserContextValue {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error(
      "useUserContext must be consumed within a UserContext.Provider"
    );
  }
  return context;
}

export default UserContext;
