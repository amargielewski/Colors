export type Color = {
  hex: string;
  id: string;
  rgb: string;
  defaultItem?: boolean;
};

export type Colors = Color[];

export type ColorFilters = { r: boolean; g: boolean; b: boolean };
