import styled from "styled-components";

import mixins from "@/styles/utils/mixins";
import devices from "@/utils/config/devices";

import { AboutMeStyledProps as Props } from "./AboutMe.types";

const { colors } = mixins;

const AboutMeStyled = styled.div<Props>`
  .AboutMe {
    &__container {
      display: flex;
      justify-content: center;

      &--global {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6rem;
        flex-direction: column;

        @media only screen and (${devices.laptop}) {
          flex-direction: row;
          gap: 12rem;
        }
      }

      &--aboutMe {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        &-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        &-stack {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 1.6rem;
          height: 22.4rem;
        }
      }

      &--swipper {
        width: 36rem;
      }
    }

    &__component {
      &--icon {
        &-container {
          display: flex;
          align-items: center;
          gap: 1.6rem;
        }

        &-circle {
          background-color: var(--palette-purple50);
          padding: 0.4rem;
          border-radius: 50%;
          padding: 0.8rem;
        }
      }

      &--slide {
        &-container {
          display: flex;
          flex-direction: column;
          gap: 3.2rem;
        }

        &-title {
          ${colors.primaryText(false)}
          text-align: center;
        }

        &-image {
          margin: auto;
          animation: rotate-icon 4s ease-in-out alternate-reverse infinite;
        }
      }

      &--border {
        border-bottom: 0.16rem solid ${colors.border()};
      }
    }
  }
`;

export default AboutMeStyled;
