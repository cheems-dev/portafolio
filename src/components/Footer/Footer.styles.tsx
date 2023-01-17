import styled from "styled-components";

import { FooterProps as Props } from "./Footer.types";

const Footer = styled.div<Props>`
  .Footer {
    &__subtitle {
      font-weight: 600;
      margin:13px 0;
    }
    
    &__card__icon_text {
      display: flex;
      gap: 9px;
      align-items: center;
    }

    &__container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: column;

      @media (min-width: 769px) {
        flex-direction: row;
      }

      &--0 {
        padding: 70px 80px;
        color: var(--palette-text);
        font-size: 14px;
      }

      &--2 {
        @media (min-width: 769px) {
          align-items: flex-end;
        }
      }
    }

    &__logo {
      display: inline-block;
      height: 40px;
      flex-grow: 1;
      background-image:url(./logo.svg);
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 30px;
    }
    
    &__sections_links {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      text-align: left;
      flex-direction: column;

      @media (min-width: 769px) {
        width: auto;
        margin-bottom: 73px;
        width: 30%;
      }

      @media (min-width: 1024px) {
        flex-direction: row;
      }

      @media (min-width: 1440px) {
        width: 25%;
      }

      & li {
        display: block;
        width:50%;
        margin-bottom: 23px;
      }

      & a {
        text-decoration: none;
      }
    }

    &__social-medias {
      display: flex;
      gap: 23px;
      flex-grow: 1;
      order: 2;
      font-color: red;
      color: secondary;
      fill: "green";

      @media (min-width: 769px) {
        order: 1;
        gap: 13px;
      }

      & a {
        color: var(--palette-text);
      }
    }

    &__contact-me {
      width: auto;
      flex-wrap: wrap;
      order: 1;
      margin-bottom: 53px;
      
      @media (min-width: 769px) {
        order: 2;
        margin-bottom: 0;
        width: 30%;
      }

      @media (min-width: 1440px) {
        width: 25%;
      }

      &__container {
        display: flex;
        flex-direction: column;
        gap: 23px;

        @media (min-width: 1024px) {
          flex-direction: row;
          gap: 43px;
        }
      }
    }
  
  }
`;

export default Footer;
