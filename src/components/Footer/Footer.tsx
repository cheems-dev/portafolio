import Styles from "./Footer.styles";
import { FooterProps as Props, IconCardProps} from "./Footer.types";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC<Props> = (props) => {

  const card__icon_text = ({icon,msg}: IconCardProps) => {
    return <div className="Footer__card__icon_text" >{icon}{msg}</div>
  }

  const card__link_icon = ({icon,href}: IconCardProps) => {
    return <a href={`${href}`}> {icon} </a>
  }

  return (
    <Styles className={`Footer`}>
      <footer className="Footer__container Footer__container--0">

        <div className="Footer__container">
          <span className="Footer__logo"/>
          
          <ul className="Footer__sections_links">
            <li>Inicio</li>
            <li>Proyectos</li>
            <li>Acerca de mi</li>
            <li>Trabajemos juntos</li>
          </ul>
        </div>

        <div className="Footer__container Footer__container--2">
          <div className="Footer__contact-me">
            <p className="Footer__subtitle">Cont&aacute;ctame</p>
            <div className="Footer__contact-me__container">
              {card__icon_text({icon: <CallIcon/>, msg: "938296302"})}
              {card__icon_text({icon: <EmailIcon/>, msg: "daprimovaria@gmail.com"})}
            </div>
          </div>

          <div className="Footer__social-medias">
              {card__link_icon({icon: <LinkedInIcon fontSize="large"/>, href: "link"})}
              {card__link_icon({icon: <WhatsAppIcon fontSize="large"/>, href: "link"})}
              {card__link_icon({icon: <InstagramIcon fontSize="large"/>, href: "link"})}
              {card__link_icon({icon: <FacebookIcon fontSize="large"/>, href: "https://www.facebook.com/"})}
          </div>
        </div>

      </footer>
    </Styles>
  );
};

export default Footer;
