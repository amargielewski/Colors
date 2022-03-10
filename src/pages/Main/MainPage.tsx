import { useState, ChangeEvent, FormEvent } from "react";
import "./MainPage.scss";
import { Color, ColorFilters } from "types/colors";
import { List } from "./List/List";
import { AddColorForm } from "./AddColorForm/AddColorForm";
import { defaultColors } from "constants/colors";
import { getRandomId } from "utils/randomId";
import {
  checkIsHashFirst,
  checkIsHEX,
  checkIsRGB,
  getColorsDataFromLocalStorage,
  removeColorFromLocalStorage,
  rgbToHex,
  hexToRgb,
  addColorToLocalStorage,
  sortColors,
  filterColors,
} from "utils/colors";
import { FilterColorForm } from "./FilterColorForm/FilterColorForm";

export const MainPage = () => {
  const [colorValue, setColorValue] = useState("");
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({ r: false, g: false, b: false });

  const [data, setData] = useState(
    filterColors(
      sortColors([...defaultColors, ...getColorsDataFromLocalStorage()]),
      filters
    )
  );

  const handleFilterChange = (filter: keyof ColorFilters, value: boolean) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
    setData(
      filterColors(
        sortColors([...defaultColors, ...getColorsDataFromLocalStorage()]),
        { ...filters, [filter]: value }
      )
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !checkIsHashFirst(value)) return;
    if (value.length > 13) return setError("No longer than 13 characters");
    else setError("");

    setColorValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isRGB = checkIsRGB(colorValue);
    const isHEX = checkIsHEX(colorValue);

    if (!isRGB && !isHEX)
      return setError("Invalid Color Format must be RGB or HEX");
    else setError("");

    const newColor: Color = {
      id: getRandomId(),
      hex: "",
      rgb: "",
    };

    if (isRGB) {
      const hexValue = rgbToHex(colorValue);
      newColor.hex = hexValue;
      newColor.rgb = colorValue.toUpperCase();
    }
    if (isHEX) {
      const rgbValue = hexToRgb(colorValue);
      newColor.rgb = rgbValue;
      newColor.hex = colorValue;
    }

    addColorToLocalStorage(newColor);
    updateItems();
    clearInput();
  };

  const clearInput = () => {
    setColorValue("");
  };

  const updateItems = () => {
    setData(() =>
      filterColors(
        sortColors([...defaultColors, ...getColorsDataFromLocalStorage()]),
        filters
      )
    );
  };

  const handleRemove = (id: string) => {
    removeColorFromLocalStorage(id);
    updateItems();
  };

  return (
    <div className="main-page-wrapper">
      <div className="main-page-form-container">
        <AddColorForm
          error={error}
          colorValue={colorValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <FilterColorForm onFilterChange={handleFilterChange} />
      </div>
      <List data={data} handleRemove={handleRemove} />
    </div>
  );
};
