import { atom } from "recoil";

export const counterStore = atom<number>({
  key: "counter",
  default: 1,
});
