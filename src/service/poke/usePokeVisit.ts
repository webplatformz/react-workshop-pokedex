import { useReducer } from "react";

export type AddPokeVisitAction = {
  type: "add";
  value: string;
};

export type ResetPokeVisitAction = {
  type: "reset";
};

type PokeVisitAction = AddPokeVisitAction | ResetPokeVisitAction;

const usePokeVisit = () => {
  return useReducer((state: Set<string>, action: PokeVisitAction) => {
    switch (action.type) {
      case "add":
        return new Set(state).add(action.value);
      case "reset":
        return new Set<string>();
      default:
        throw new Error("unknown action type");
    }
  }, new Set<string>());
};

export default usePokeVisit;
