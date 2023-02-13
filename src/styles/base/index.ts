import { createGlobalStyle } from "styled-components";

import animations from "./animations";
import base from "./base";
import typography from "./typography";
import themes from "../theme";
import cssVariables from "../utils/cssVariables";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCSSVariables = (theme: any) => {
  const { functions, mixins, ...rest } = theme;
  return cssVariables(rest);
};

const GlobalStyles = createGlobalStyle`
${(props) => getCSSVariables(props.theme || themes.light)}
${base}
${typography}
    ${animations}
`;

export default GlobalStyles;
