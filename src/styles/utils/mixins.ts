import { css } from "styled-components";

const colors = {
  primaryText: (light = true) => css`
    color: ${light ? "var(--palette-dark100)" : "var(--palette-dark800)"};
  `,
  headerText: () => css`
    color: var(--palette-dark200);
  `,
  secondaryText: () => css`
    color: var(--palette-dark300);
  `,
  disabledText: () => css`
    color: var(--palette-dark400);
  `,
  border: (light = true) => css`
    ${light ? "var(--palette-dark500)" : "var(--palette-dark800)"};
  `,
  inactiveElement: () => css`
    background-color: var(--palette-dark600);
  `,
  backgroundTable: () => css`
    color: var(--palette-dark700);
  `,
  bg: () => css`
    background-color: var(--palette-dark800);
  `,
  primaryColor: () => css`
    color: var(--palette-purple500);
  `,
};

const fonts = {
  manropeLight: () => css`
    font-family: var(--primary-font);
    font-weight: 300;
  `,
  manropeRegular: () => css`
    font-family: var(--primary-font);
    font-weight: 400;
  `,
  manropeSemiBold: () => css`
    font-family: var(--primary-font);
    font-weight: 600;
  `,
  rotaBold: () => css`
    font-family: var(--secondary-font);
  `,
};

const mixins = {
  colors,
  fonts,
};

export default mixins;
