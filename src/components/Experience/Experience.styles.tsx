import { devices } from "@/utils/config/devices";
import styled from "styled-components";

import { ExperienceStyledProps as Props } from "./Experience.types";

const ExperienceStyled = styled.div<Props>`
  .Experience {
    &__container {
      display: flex;
      flex-direction: column;
      gap: 6rem;

      @media only screen and (${devices.laptop}) {
        flex-direction: row;
        gap: 8rem;
      }

      &--project {
        margin-bottom: 336px;
        position: relative;

        &:nth-child(3) {
          margin-top: 40px;
        }

        @media (min-width: 768px) {
          &:nth-child(3) {
            margin-top: 0px;
          }
          margin-bottom: 272px;
        }

        @media (min-width: 1024px) {
          margin-bottom: 124px;
        }
      }
    }

    &__component {
      &--image {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        max-width: 100%;
        overflow: hidden;

        @media (min-width: 1024px) {
          width: 708px;
        }

        @media (min-width: 1440px) {
          width: 780px;
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
        position: absolute;
        top: 64%;
        /* TODO: Usar de variables */
        background-color: #fcfaff;
        box-shadow: 0px 0px 10px rgba(229, 215, 254, 0.5);
        /*   margin: 0px 20px; */
        padding: 20px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        @media (min-width: 768px) {
          top: 80%;
          /*  margin: 0px 48px; */
        }

        @media (min-width: 1024px) {
          /* TODO: Usar de variables */
          box-shadow: -5px 5px 10px rgba(202, 175, 253, 0.5);
          padding: 24px;
          width: 504px;
          /*   margin: 0px 92px; */
          right: 0;
          top: -12%;
        }

        @media (min-width: 1440px) {
          width: 648px;
        }

        &-text {
          color: #6838f2;
          font-weight: 300;

          @media (min-width: 1024px) {
          }
        }

        &-position {
          font-weight: 500;
          font-size: 20px;
          color: #6838f2;
        }
      }

      &--stack {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;

        &-chip {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
        }

        &-bg {
          width: 40px;
          height: 40px;
          background-color: #e5d7fe;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          @media (min-width: 1024px) {
            width: 48px;
            height: 48px;
          }
        }
      }
    }
  }
`;

export default ExperienceStyled;
