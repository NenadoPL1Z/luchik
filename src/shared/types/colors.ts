export const COLORS_MAP = {
  primary: "#B96D03",
  secondary: "#FFEECD",
  background_secondary: "rgba(255,238,205,0.9)",
  main: "#FFA82E",
  background_main: "rgba(255,168,46,0.9)",
  white: "#FFFFFF",
  third: "#FFF8E7",
  black: "#000000",
} as const;
export type ColorName = keyof typeof COLORS_MAP;
