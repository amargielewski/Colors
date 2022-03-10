import { hexRegex, rgbRegex } from "constants/regex";
import { Color, ColorFilters, Colors } from "types/colors";
import { getValue, setValue } from "./localStorage";

export const checkIsRGB = (value: string) => !!value.match(rgbRegex);
export const checkIsHEX = (value: string) => !!value.match(hexRegex);

export const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(
    shorthandRegex,
    (m: string, r: string, g: string, b: string) => r + r + g + g + b + b
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `RGB(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )})`
    : "";
};

const componentToHex = (color: number) => {
  const hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const getSeparatedRgbValues = (rgb: string) => {
  return rgb
    .toLowerCase()
    .replace("rgb", "")
    .replace("(", "")
    .replace(")", "")
    .split(",")
    .map((i) => +i.trim());
};

export const rgbToHex = (rgb: string) => {
  const [r, g, b] = getSeparatedRgbValues(rgb);

  return "#" + componentToHex(+r) + componentToHex(+g) + componentToHex(+b);
};

export const checkIsHashFirst = (value: string) => {
  const firstSymbol = value.toLowerCase().substring(0, 1);

  if (firstSymbol === "#" || firstSymbol === "r") return true;
  return false;
};

export const setColorsDataToLocalStorage = (data: Colors) =>
  setValue("data", JSON.stringify(data));

export const getColorsDataFromLocalStorage = (): Colors =>
  JSON.parse(getValue("data") || "[]");

export const removeColorFromLocalStorage = (id: string) => {
  const currentColors = getColorsDataFromLocalStorage();

  const filteredColors = currentColors.filter((color) => color.id !== id);

  setColorsDataToLocalStorage(filteredColors);
};

export const addColorToLocalStorage = (color: Color) => {
  const currentColors = getColorsDataFromLocalStorage();

  setColorsDataToLocalStorage([...currentColors, color]);
};

export const sortColors = (dataToSort: Colors) => {
  return [...dataToSort].sort((prev, next) => {
    const [prevR, prevG, prevB] = getSeparatedRgbValues(prev.rgb);
    const [nextR, nextG, nextB] = getSeparatedRgbValues(next.rgb);

    if (prevR !== nextR) return prevR > nextR ? -1 : 1;
    if (prevG !== nextG) return prevG > nextG ? -1 : 1;
    return prevB > nextB ? -1 : 1;
  });
};

export const filterColors = (dataToFilter: Colors, filters: ColorFilters) => {
  return dataToFilter.filter((color) => {
    const [r, g, b] = getSeparatedRgbValues(color.rgb);

    if (filters.r) if (r <= 127) return false;
    if (filters.g) if (g <= 127) return false;
    if (filters.b) if (b <= 127) return false;
    return true;
  });
};
