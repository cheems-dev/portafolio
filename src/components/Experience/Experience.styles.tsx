import styled from "styled-components";

import mixins from "@/styles/utils/mixins";
import devices from "@/utils/config/devices";

import { ExperienceStyledProps as Props } from "./Experience.types";

const { colors } = mixins;

const ExperienceStyled = styled.div<Props>`
  .Experience {
    &__container {
      display: flex;
      flex-direction: column;
      gap: 6rem;

      &--project {
        display: flex;
        position: relative;
        flex-direction: column-reverse;

        @media screen and (${devices.tablet}) {
          margin-bottom: 34rem;
        }

        @media screen and (min-width: 1040px) {
          margin-bottom: 27rem;
        }

        @media screen and (${devices.laptopL}) {
          margin-bottom: 3.2rem;
        }

        &-isOdd {
          justify-content: flex-start;

          .Experience__component--content {
            right: 0;
          }
        }

        &-isEven {
          justify-content: flex-end;

          .Experience__component--content {
            left: 0;
          }
        }
      }
    }

    &__component {
      &--image {
        width: 100%;
        height: 100%;
        max-width: 100%;
        overflow: hidden;

        @media only screen and (${devices.laptop}) {
          width: 70.8rem;
        }

        @media only screen and (${devices.laptopL}) {
          width: 78rem;
        }

        &-component {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          transition: 1s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      &--content {
        position: block;
        background-color: var(--palette-purple);
        box-shadow: 0 0 1rem var(--palette-purpleShadow);
        padding: 2.4rem 2rem;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        @media only screen and (${devices.tablet}) {
          position: absolute;
          top: 64%;
          z-index: 4;
        }

        @media only screen and (min-width: 768px) {
          top: 80%;
        }

        @media only screen and (${devices.laptopL}) {
          box-shadow: -0.5rem 0.5rem 1rem var(--palette-purpleShadow);
          padding: 2.4rem;
          width: 50.4rem;
          top: -12%;
        }

        @media only screen and (${devices.laptopL}) {
          width: 64.8rem;
        }

        &-text {
          ${colors.primaryColor}
        }

        &-paragraph {
          max-height: 7.6rem;
          overflow-y: scroll;

          @media only screen and (${devices.laptop}) {
            overflow-y: hidden;
            max-height: auto;
          }
        }

        &-position {
          font-weight: 600;
          font-size: 2rem;
          ${colors.primaryColor}
        }
      }

      &--stack {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2.4rem;

        @media only screen and (${devices.laptop}) {
          gap: 1.6rem;
        }

        &-chip {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
        }

        &-bg {
          width: 4rem;
          height: 4rem;
          background-color: var(--palette-purpleGray);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          @media only screen and (${devices.laptop}) {
            width: 4.8rem;
            height: 4.8rem;
          }
        }
      }
    }
  }
`;

export default ExperienceStyled;
