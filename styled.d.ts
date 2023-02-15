import "styled-components";
import type { ThemeType } from "./global/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
