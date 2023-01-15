import { createTheme } from "@mui/material";
import variables from "../utils/variables";

import dark from "./dark";
import light from "./light";

const { palette } = variables;

const themes = {
  light,
  dark,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.purple100,
    },
    secondary: {
      main: palette.purple200,
    },
    info: {
      main: palette.purple400,
    },
  },
});

export default themes;
