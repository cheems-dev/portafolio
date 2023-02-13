import themes from "styles/theme";

type ThemeInterface = typeof themes.defaultTheme;

declare module "styled-components" {
  type DefaultTheme = ThemeInterface;
}
