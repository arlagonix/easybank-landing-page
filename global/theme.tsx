import { convertPxToRem } from "../utils/convertPxToRem";

export const theme = {
  colors: {
    limeGreen: "#31D35C",
    brightCyan: "#2BB7DA",

    black: "#2D314E",
    grayOne: "#777777",
    grayTwo: "#BBBBBB",

    white: "#FFFFFF",
    whiteOne: "#FAFAFA",
    whiteTwo: "#F4F5F7",
  },
  gradients: {
    standard: "linear-gradient(to right, #31D35C, #2BB7DA);",
  },
  sizes: {
    standardWidth: convertPxToRem("1110px"),
    mediumWidth: convertPxToRem("900px"),
  },
};

export type ThemeType = typeof theme;
