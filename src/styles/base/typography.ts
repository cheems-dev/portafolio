import { css } from "styled-components";

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

  .text {
    color: var(--palette-black);
    font-size: 1.6rem;
    line-height: 2.4rem;

    &--bold {
      font-weight: 500;
    }

    &--link {
      color: var(--palette-primary);
      font-weight: 500;
    }

    &--error {
      color: var(--palette-error);
      font-size: 1.4rem;
    }

    &--link-secondary {
      font-size: 1.2rem;
    }

    &--white {
      color: var(--palette-white);
    }

    &--gray {
      color: var(--palette-gray-s0-l68);
      opacity: 0.6;
    }
  }

  .fs {
    &--12 {
      font-size: 1.2rem;
    }

    &--14 {
      font-size: 1.4rem;
    }

    &--20 {
      font-size: 2rem;
    }

    &--24 {
      font-size: 2.4rem;
    }

    &--30 {
      font-size: 3rem;
    }
  }

  .fw {
    &--400 {
      font-weight: 400;
    }

    &--500 {
      font-weight: 500;
    }
  }

  h1 {
    font-family: "Rota-Bold";
    font-size: 4.8rem;
    line-height: 6.7rem;
    text-transform: capitalize;
  }

  h2 {
    font-family: "Rota-Bold";
    font-size: 4rem;
    line-height: 5.6rem;
    text-transform: none;
  }

  h3 {
    font-family: "Rota-Bold";
    font-size: 3.2rem;
    line-height: 4.5rem;
    text-transform: capitalize;
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
  }

  button {
    font-family: "Manrope-Normal-Semibold";
    font-size: 1.6rem;
    line-height: 3.2rem;
  }

  span {
    display: block;
  }
`;

export default typography;
