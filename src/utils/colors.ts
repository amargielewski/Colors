import { hexRegex, rgbRegex } from "constants/regex";

export const checkIsRGB = (value: string) => !!value.match(rgbRegex);
export const checkIsHEX = (value: string) => !!value.match(hexRegex);

export const checkIsHashFirst = (value: string) => {
  const firstSymbol = value.toLowerCase().substring(0, 1);

  if (firstSymbol === "#" || firstSymbol === "r") return true;
  return false;
};
