import styled from "styled-components";

import variables from "@/styles/utils/variables";

import { BannerStyledProps as Props } from "./Banner.types";

const { gradients } = variables;

const BannerStyled = styled.div<Props>`
  .Banner {
    &__container {
      background-image: ${gradients.gradientBanner};
      display: flex;
      justify-content: center;
      align-items: center;

      &--info {
        animation: side-content-text 0.8s ease-in-out;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        &-buttons {
          display: flex;
          gap: 2.4rem;
        }
      }

      &--profile {
        animation: side-content-img 0.8s ease-in-out;
      }

      &--banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__component {
      &--profile {
        width: 253px;
        height: 272px;

        @media (min-width: 1024px) {
          width: 403px;
          height: 472px;
        }

        @media (min-width: 1280px) {
          width: 524px;
          height: 562px;
        }
      }
    }

    &__text {
      &--title {
        color: var(--palette-purple700);

        &-secondary {
          color: var(--palette-purple50);
        }
      }

      &--paragraph {
        color: var(--palette-white);
      }
    }
  }
`;

export default BannerStyled;
