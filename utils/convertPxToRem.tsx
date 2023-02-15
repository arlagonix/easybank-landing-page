// Based on https://stackoverflow.com/a/42769683/19449790
/**
 * Converts pixels into rems
 *
 * | Input            | Output  |
 * | :--------------- | :------ |
 * | `16`             |  `1rem` |
 * | `32px`           |  `2rem` |
 * | `16whateveritis` |  `1rem` |
 */
export function convertPxToRem(px: number | string): string {
  // The line below doesn't work because of SSR, but I feel sorry to delete it
  // const standardFontSize = parseFloat(document.getElementById("root").style.fontSize);
  return (parseFloat(px.toString()) / 16).toString() + "rem";
}
