import styled from "styled-components";
import variables from "@/styles/utils/variables";

import { NavbarStyledProps as Props } from "./Navbar.types";

const { shadows } = variables;

const NavbarStyled = styled.div<Props>`
  width: 100%;
  height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadows.shadowSm};
  animation: navbar-content 0.8s ease-in-out;
  position: sticky;
  z-index: 99;
  top: 0;
  background-color: var(--palette-white);

  .Navbar {
    &__component {
      display: flex;
      justify-content: space-between;
      width: 90vw;
    }
  }
`;

export default NavbarStyled;
