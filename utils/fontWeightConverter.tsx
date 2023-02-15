type FontWeightInputType =
  | "thin"
  | "extra light"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extra bold"
  | "black";

type FontWeightOutputType = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export const fontWeightMap = new Map<FontWeightInputType, FontWeightOutputType>([
  ["thin", "100"],
  ["extra light", "200"],
  ["light", "300"],
  ["regular", "400"],
  ["medium", "500"],
  ["semibold", "600"],
  ["bold", "700"],
  ["extra bold", "800"],
  ["black", "900"],
]);

/**
 * Converts a font weight description into a corresponding weight
 *
 * | Input            | Output |
 * | :--------------- | :----- |
 * | `extra light`    |  `100` |
 * | `thin`           |  `200` |
 * | `light`          |  `300` |
 * | `regular`        |  `400` |
 * | `medium`         |  `500` |
 * | `semibold`       |  `600` |
 * | `bold`           |  `700` |
 * | `extra bold`     |  `800` |
 * | `black`          |  `900` |
 */
export function convertFontWeight(fontWeight: FontWeightInputType): FontWeightOutputType {
  return fontWeightMap.get(fontWeight);
}
