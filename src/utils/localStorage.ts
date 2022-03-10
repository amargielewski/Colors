import { Colors } from "types/colors";

type LocalStorage = {
  data: Colors;
};

export const getValue = (key: keyof LocalStorage) =>
  localStorage.getItem(key) ?? "";

export const setValue = (key: keyof LocalStorage, data: string) =>
  localStorage.setItem(key, data);
