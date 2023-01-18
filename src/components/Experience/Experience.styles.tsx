import styled from "styled-components";

import { ExperienceStyledProps as Props } from "./Experience.types";

const ExperienceStyled = styled.div<Props>`
  .Experience {
    &__container {
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
      &--project {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 100%;
        overflow: hidden;

        @media (min-width: 1024px) {
          width: 708px;
          margin-left: 92px;
        }

        @media (min-width: 1440px) {
          width: 780px;
        }

        &-image {
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
        background-color: #fcfaff;
        box-shadow: 0px 0px 10px rgba(229, 215, 254, 0.5);
        margin: 0px 20px;
        padding: 20px;
        border-radius: 4px;

        @media (min-width: 768px) {
          top: 80%;
          margin: 0px 48px;
        }

        @media (min-width: 1024px) {
          box-shadow: -5px 5px 10px rgba(202, 175, 253, 0.5);
          padding: 30px;
          width: 504px;
          margin: 0px 92px;
          right: 0;
          top: -12%;
        }

        @media (min-width: 1440px) {
          width: 648px;
        }

        &-text {
          color: #6838f2;
          font-weight: 300;
          margin-bottom: 8px;

          @media (min-width: 1024px) {
            margin-bottom: 16px;
          }
        }

        &-position {
          font-weight: 500;
          font-size: 20px;
          color: #6838f2;
          margin-bottom: 8px;
        }
      }
    }
  }
`;

export default ExperienceStyled;
