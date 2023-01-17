import { css } from "styled-components";

const base = css`
  /* Normalization */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    /* TODO: PENDING */
    /* color-scheme: light dark; */
  }

  :focus {
    /* TODO: PENDING */
    /* outline: 0.1rem solid var(--palette-primary); */
  }

  html {
    height: 100%;
    width: 100%;
    font-size: 62.5%; //16px default to 10px
    box-sizing: border-box;

    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  body {
    /* TODO: PENDING */
    /*   background-color: var(--palette-secondary); */
    text-rendering: optimizeSpeed;
    line-height: 1.2;
  }

  body,
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  *::-webkit-scrollbar {
    /* TODO: PENDING */
    /*   width: 0.4rem;
    height: 0.4rem;
    background-color: transparent; */
  }

  *::-webkit-scrollbar-thumb {
    /*    border-radius: 0.4rem;
    background-color: var(--palette-grey8); */
  }

  #root > * {
    min-height: var(--sizes-page-minHeight);
    min-width: var(--sizes-page-minWidth);
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration-skip-ink: auto;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    /*   line-height: 1.15; */ /* 1 */
    margin: 0; /* 2 */
  }

  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    border: none;
  }

  /* Normalization END */

  .GlobalStyles {
    &__container {
      width: 80vw;
    }
  }
`;

export default base;
