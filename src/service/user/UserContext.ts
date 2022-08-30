import { createContext, useContext } from "react";

export type UserData = {
  name: string;
  email: string;
};

type UserContextValue = {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function useUserContext(): UserContextValue {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be consumed within a UserContext.Provider"
    );
  }
  return context;
}

export default UserContext;
