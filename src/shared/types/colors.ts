export const COLORS_MAP = {
  primary: "#B96D03",
  secondary: "#FFEECD",
  main: "#FFA82E",
  white: "#FFFFFF",
  third: "#FFF8E7",
  black: "#000000",
} as const;
export type Colors = keyof typeof COLORS_MAP;
