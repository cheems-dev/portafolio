import { createGlobalStyle } from "styled-components";
import themes from "../theme";

import cssVariables from "../utils/cssVariables";
import animations from "./animations";
import base from "./base";
import typography from "./typography";

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
