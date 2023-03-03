import { css } from "styled-components";

import devices from "@/utils/config/devices";

import mixins from "../utils/mixins";

const { colors, fonts } = mixins;

const typography = css`
  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${colors.headerText};
  }

  h1 {
    ${fonts.rotaBold}
    font-size: 3.2rem;
    line-height: 5.6rem;
    text-transform: capitalize;

    @media only screen and (${devices.laptop}) {
      font-size: 4.8rem;
      line-height: 6.7rem;
    }
  }

  h2 {
    ${fonts.rotaBold}
    font-size: 3.2rem;
    line-height: 3.2rem;
    text-transform: none;

    @media only screen and (${devices.laptop}) {
      font-size: 4rem;
      line-height: 5.6rem;
    }
  }

  h3 {
    ${fonts.rotaBold}
    font-size: 3.2rem;
    line-height: 4.5rem;
    text-transform: capitalize;

    @media only screen and (${devices.laptop}) {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }
  }

  h4 {
    ${fonts.rotaBold}
    font-size: 2.4rem;
    line-height: 3.4rem;
    text-transform: capitalize;
  }

  p,
  button {
    ${colors.primaryText()};
  }

  p {
    ${fonts.manropeRegular}
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  button {
    ${fonts.manropeSemiBold}
    font-size: 1.6rem;
    line-height: 2.4rem;

    @media only screen and (${devices.laptopXL}) {
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }

  span {
    display: block;
  }

  li,
  span {
    ${colors.headerText()};
    ${fonts.manropeRegular}
    font-size: 1.4rem;
    line-height: 2.8rem;
  }
`;

export default typography;
