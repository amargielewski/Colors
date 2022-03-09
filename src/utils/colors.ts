import { hexRegex, rgbRegex } from "constants/regex";

export const checkIsRGB = (value: string) => !!value.match(rgbRegex);
export const checkIsHEX = (value: string) => !!value.match(hexRegex);
