import styled from "styled-components";
import variables from "@/styles/utils/variables";

import { ButtonStyledProps as Props } from "./Button.types";

const { shadows } = variables;

const Button = styled.div<Props>`
  .Button {
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.48rem;
    height: 100%;
    cursor: pointer;
    box-shadow: ${shadows.shadow};

    &__outlined {
      border: 0.16rem solid var(--palette-purple500);
      background-color: inherit;
      color: var(--palette-purple500);
    }

    &__contained {
      background-color: var(--palette-purple500);
      color: var(--palette-white);
      border-color: inherit;
    }

    &__text {
      color: var(--palette-purple500);
      background-color: inherit;
      background-color: var(--palette-white);
    }

    &:disabled {
      opacity: 0.4;
      cursor: unset;
    }
  }
`;

export default Button;
