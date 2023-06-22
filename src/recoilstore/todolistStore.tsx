import { atom } from "recoil";

export const todolistStore = atom<string[]>({
  key: "todolist",
  default: [],
});
