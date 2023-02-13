import { css } from "styled-components";

import devices from "@/utils/config/devices";

const typography = css`
  @font-face {
    font-family: "Manrope-Bigger-Regular";
    src: url("/fonts/manrope/Manrope-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Manrope-Bigger-Semibold";
    src: url("/fonts/manrope/Manrope-SemiBold.ttf") format("truetype");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Manrope-Normal-Regular";
    src: url("/fonts/manrope/Manrope-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Manrope-Normal-Semibold";
    src: url("/fonts/manrope/Manrope-SemiBold.ttf") format("truetype");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Manrope-Small-Regular";
    src: url("/fonts/manrope/Manrope-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Manrope-Small-Semibold";
    src: url("/fonts/manrope/Manrope-SemiBold.ttf") format("truetype");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Rota-Bold";
    src: url("/fonts/rota/Rota-Bold.otf") format("opentype");
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: "Manrope-Bigger-Regular", "Manrope-Bigger-Semibold",
      "Manrope-Normal-Regular", "Manrope-Normal-Semibold",
      "Manrope-Small-Regular", "Manrope-Small-Semibold", "Rota-Bold", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-family: "Rota-Bold";
    font-size: 3.2rem;
    line-height: 5.6rem;
    text-transform: capitalize;

    @media only screen and (${devices.laptop}) {
      font-size: 4.8rem;
      line-height: 6.7rem;
    }
  }

  h2 {
    font-family: "Rota-Bold";
    font-size: 3.2rem;
    line-height: 3.2rem;
    text-transform: none;

    @media only screen and (${devices.laptop}) {
      font-size: 4rem;
      line-height: 5.6rem;
    }
  }

  h3 {
    font-family: "Rota-Bold";
    font-size: 3.2rem;
    line-height: 4.5rem;
    text-transform: capitalize;

    @media only screen and (${devices.laptop}) {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }
  }

  h4 {
    font-family: "Rota-Bold";
    font-size: 2.4rem;
    line-height: 3.4rem;
    text-transform: capitalize;
  }

  p {
    margin: 0;
    font-family: "Manrope-Normal-Regular";
    font-size: 1.6rem;
    line-height: 3.2rem;
    font-weight: 400;
    color: var(--palette-text);

    @media only screen and (${devices.laptop}) {
      line-height: 2.4rem;
      font-weight: 300;
    }
  }

  button {
    font-family: "Manrope-Normal-Semibold";
    font-size: 1.6rem;
    line-height: 3.2rem;
  }

  span {
    display: block;
  }

  li,
  span {
    font-family: "Manrope-Small-Regular";
    font-size: 1.4rem;
    line-height: 2.8rem;
  }
`;

export default typography;
