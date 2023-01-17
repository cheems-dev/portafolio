import styled from "styled-components";

import { AboutMeStyledProps as Props } from "./AboutMe.types";

const AboutMeStyled = styled.div<Props>`
  .AboutMe {
    &__container {
      display: flex;
      justify-content: center;

      &--aboutMe {
        display: flex;
        flex-direction: column;
      }

      &--text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-bottom: 0.1rem solid var(--palette-border);
      }

      &--stack {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 2rem auto;
        gap: 1.6rem;
        height: 22.4rem;
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
          background-color: var(--palette-purple100);
          padding: 0.4rem;
          border-radius: 50%;
          padding: 0.8rem;
        }
      }
    }
  }
`;

export default AboutMeStyled;
