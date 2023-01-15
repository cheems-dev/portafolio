const palette = {
  empty: "", // Fixes a bug with styled components that appends a coma
  white: "hsla(0, 0%, 100%, 1)",
  black: "hsla(0, 0%, 0%, 1)",
  bg: "hsla(200, 60%, 99%, 1)",
  bgAlt: "hsla(210, 20%, 98%, 1)",
  border: "hsla(206, 23%, 94%, 1)",
  lighter: "hsla(206, 13%, 75%, 1)h",
  light: "hsla(205, 11%, 60%, 1)",
  text: "hsla(205, 11%, 46%, 1)",
  title: "hsla(205, 30%, 22%, 1)",

  purple50: "hsla(277, 82%, 97%, 1)",
  purple100: "hsla(277, 82%, 85%, 1)",
  purple200: "hsla(277, 82%, 69%, 1)",
  purple300: "hsla(277, 82%, 54%, 1)",
  purple400: "hsla(277, 82%, 38%, 1)",
  purple500: "hsla(277, 82%, 23%, 1)",
  purple600: "hsla(277, 83%, 18%, 1)",
  purple700: "hsla(277, 83%, 14%, 1)",
  purple800: "hsla(277, 83%, 9%, 1)",
  purple900: "hsla(278, 83%, 5%, 1)",

  blue50: "hsla(208, 87%, 97%, 1)",
  blue100: "hsla(206, 88%, 94%, 1)",
  blue200: "hsla(205, 87%, 81%, 1)",
  blue300: "hsla(205, 87%, 75%, 1)",
  blue400: "hsla(205, 87%, 67%, 1)",
  blue500: "hsla(205, 87%, 50%, 1)",
  blue600: "hsla(205, 87%, 44%, 1)",
  blue700: "hsla(205, 87%, 37%, 1)",
  blue800: "hsla(205, 87%, 31%, 1)",
  blue900: "hsla(205, 42%, 17%, 1)",

  yellow50: "hsla(36, 100%, 97%, 1)",
  yellow100: "hsla(39, 100%, 95%, 1)",
  yellow200: "hsla(38, 100%, 89%, 1)",
  yellow300: "hsla(38, 100%, 81%, 1)",
  yellow400: "hsla(38, 100%, 74%, 1)",
  yellow500: "hsla(38, 100%, 63%, 1)",
  yellow600: "hsla(38, 77%, 56%, 1)",
  yellow700: "hsla(38, 60%, 44%, 1)",
  yellow800: "hsla(38, 60%, 31%, 1)",
  yellow900: "hsla(70, 7%, 18%, 1)",

  red50: "hsla(0, 86%, 97%, 1)",
  red100: "hsla(350, 82%, 91%, 1)",
  red200: "hsla(350, 80%, 82%, 1)",
  red300: "hsla(350, 81%, 74%, 1)",
  red400: "hsla(350, 80%, 65%, 1)",
  red500: "hsla(350, 80%, 56%, 1)",
  red600: "hsla(350, 80%, 45%, 1)",
  red700: "hsla(350, 80%, 34%, 1)",
  red800: "hsla(350, 81%, 22%, 1)",
  red900: "hsla(350, 81%, 12%, 1)",
};

const fonts = {};

export const columns = 12;

export const columnsMaxTotalWidth = "120rem";

export const gridMinMargin = "2rem";

export const gridTotalMinMargin = `calc(${gridMinMargin} * 2)`;

export const gridMargin = `minmax(${gridMinMargin}, 1fr)`;

export const columnsTotalWidth = `calc(100% - ${gridTotalMinMargin})`;

export const columnMaxWidth = `calc(${columnsMaxTotalWidth} / ${columns})`;

export const columnWidth = `minmax(0, min(calc(${columnsTotalWidth} / ${columns}), ${columnMaxWidth}))`;

const sizes = {
  page: {
    minWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    maxWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    minHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    maxHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    columns: `[start] ${gridMargin} [content-start] repeat(${columns}, ${columnWidth}) [content-end] ${gridMargin} [end]`,
  },
  sidebar: {
    maxWidth: "6.8rem",
  },
  menu: {
    width: "24rem",
    widthMobile: "18.6rem",
  },
  navbar: {
    height: "5.6rem",
  },
  containerHeader: "6.4rem",
};

const variables = { palette, fonts, sizes };

export default variables;
