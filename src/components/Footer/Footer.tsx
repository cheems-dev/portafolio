import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import CONSTANTS from "@/utils/config/constants";

import Styles from "./Footer.styles";
import { IconCardProps } from "./Footer.types";

const { URL_LINKEDIN } = CONSTANTS;

const Footer: React.FC = () => {
  const cardIconText = (props: IconCardProps) => {
    const { icon, msg } = props;

    return (
      <div className="Footer__card__icon_text">
        {icon}
        <span>{msg}</span>
      </div>
    );
  };

  const cardLinkIcon = (props: IconCardProps) => {
    const { icon, href } = props;

    return <a href={`${href}`}> {icon} </a>;
  };

  return (
    <Styles className="Footer">
      <footer className="GlobalStyles__container--component Footer__container">
        <div className="Footer__container--items">
          <span className="Footer__logo" />

          <ul className="Footer__sections_links">
            <li>Inicio</li>
            <li>Proyectos</li>
            <li>Acerca de mi</li>
            <li>Trabajemos juntos</li>
          </ul>
        </div>

        <div className="Footer__container--items Footer__container--end">
          <div className="Footer__contact-me">
            <p className="Footer__subtitle">Cont&aacute;ctame</p>
            <div className="Footer__contact-me__container">
              {cardIconText({ icon: <CallIcon />, msg: "938296302" })}
              {cardIconText({
                icon: <EmailIcon />,
                msg: "daprimovaria@gmail.com",
              })}
            </div>
          </div>

          <div className="Footer__social-medias">
            {cardLinkIcon({
              icon: (
                <LinkedInIcon
                  fontSize="large"
                  className="Footer__social-medias--icon"
                />
              ),
              href: URL_LINKEDIN,
            })}
            {cardLinkIcon({
              icon: (
                <WhatsAppIcon
                  fontSize="large"
                  className="Footer__social-medias--icon"
                />
              ),
              href: "link",
            })}
            {cardLinkIcon({
              icon: (
                <InstagramIcon
                  fontSize="large"
                  className="Footer__social-medias--icon"
                />
              ),
              href: "link",
            })}
            {cardLinkIcon({
              icon: (
                <FacebookIcon
                  fontSize="large"
                  className="Footer__social-medias--icon"
                />
              ),
              href: "https://www.facebook.com/",
            })}
          </div>
        </div>
      </footer>
    </Styles>
  );
};

export default Footer;
