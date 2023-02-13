import styled from "styled-components";

import { devices } from "@/utils/config/devices";

import { FooterProps as Props } from "./Footer.types";

const Footer = styled.div<Props>`
  color: var(--palette-light);
  border-top: 0.1rem solid var(--palette-border);

  .Footer {
    &__subtitle {
      font-weight: 600;
      margin: 1.6rem 0;
    }

    &__card__icon_text {
      display: flex;
      gap: 0.8rem;
      align-items: center;
    }

    &__container {
      margin: auto;
      padding: 7rem 0;

      &--items {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: column;

        @media (${devices.tablet}) {
          flex-direction: row;
        }
      }

      &--end {
        @media (${devices.tablet}) {
          align-items: flex-end;
        }
      }
    }

    &__logo {
      display: inline-block;
      height: 4rem;
      flex-grow: 1;
      background-image: url(./logo.svg);
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 3.2rem;
    }

    &__sections_links {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      text-align: left;
      flex-direction: column;

      @media (${devices.tablet}) {
        width: auto;
        margin-bottom: 7.2rem;
        width: 30%;
      }

      @media (${devices.laptop}) {
        flex-direction: row;
      }

      @media (${devices.laptopL}) {
        width: 25%;
      }

      & li {
        display: block;
        width: 50%;
        margin-bottom: 2.4rem;
      }

      & a {
        text-decoration: none;
      }
    }

    &__social-medias {
      display: flex;
      gap: 2.4rem;
      flex-grow: 1;
      order: 2;
      color: secondary;
      fill: var(--palette-light);

      @media (${devices.tablet}) {
        order: 1;
        gap: 1.2rem;
      }

      &--icon {
        color: var(--palette-light);
        cursor: pointer;
      }
    }

    &__contact-me {
      width: auto;
      flex-wrap: wrap;
      order: 1;
      margin-bottom: 5.2rem;

      @media (${devices.tablet}) {
        order: 2;
        margin-bottom: 0;
        width: 30%;
      }

      @media (${devices.laptopL}) {
        width: 25%;
      }

      &__container {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        @media (${devices.laptop}) {
          flex-direction: row;
        }
      }
    }
  }
`;

export default Footer;
