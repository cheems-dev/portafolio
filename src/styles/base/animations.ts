import { css } from "styled-components";

const animations = css`
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes navbar-content {
    0% {
      opacity: 0;
      transform: translateY(-64px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @-webkit-keyframes navbar-content {
    0% {
      opacity: 0;
      transform: translateY(-64px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes navbar-content {
    0% {
      opacity: 0;
      transform: translateY(-64px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @-moz-keyframes side-content-text {
    0% {
      opacity: 0;
      transform: translateY(80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @-webkit-keyframes side-content-text {
    0% {
      opacity: 0;
      transform: translateY(80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes side-content-text {
    0% {
      opacity: 0;
      transform: translateY(80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @-moz-keyframes side-content-img {
    0% {
      opacity: 0;
      transform: translateX(-80px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @-webkit-keyframes side-content-img {
    0% {
      opacity: 0;
      transform: translateX(-80px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes side-content-img {
    0% {
      opacity: 0;
      transform: translateX(-80px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export default animations;
