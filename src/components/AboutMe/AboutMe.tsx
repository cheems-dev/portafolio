import { SwiperSlide } from "swiper/react";

import { IconsComponent, SlideComponent } from "./AboutMe.helpers";
import { items, softSkills } from "./AboutMe.helpers";
import Styles from "./AboutMe.styles";
import { AboutMeProps as Props } from "./AboutMe.types";
import SwiperCards from "../global/SwiperCards/SwiperCards";

const AboutMe: React.FC<Props> = (props) => {
  const renderSwiper = () => (
    <SwiperCards>
      {softSkills.map((skill, index) => (
        <SwiperSlide key={index}>
          <SlideComponent
            src={`/soft-skill/${skill.image}`}
            title={skill.title}
          />
        </SwiperSlide>
      ))}
    </SwiperCards>
  );

  return (
    <Styles className={`AboutMe`}>
      <div className="GlobalStyles__padding AboutMe__container">
        <div className="GlobalStyles__container AboutMe__container--global">
          <div className="AboutMe__container--aboutMe">
            <h2 className="AboutMe__title">
              <span>01.</span> Sobre mí
            </h2>
            <div className="AboutMe__container--aboutMe-text">
              <p>
                Me llamo <b>Luis Ccalluchi Lopez,</b> soy de{" "}
                <b>Arequipa, Perú</b> y desarrollo productos digitales centrados
                en el usuario.
              </p>
              <p>
                Inicie en el mundo de la programacion en <b>2017.</b> Enfocado
                en el constante aprendizaje y emprendimiento.
              </p>
              <p>
                Soy una persona muy <b>autodidacta,</b> actualmente estoy
                aprendiendo sobre la Arquitectura de <b>Micro-Frontend.</b>
              </p>
            </div>
            <div className="AboutMe__container--aboutMe-stack">
              {items.map((item, index) => (
                <IconsComponent
                  key={index}
                  src={`/stack/${item.icon}`}
                  title={item.title}
                />
              ))}
            </div>
          </div>
          <div className="AboutMe__container--swipper">{renderSwiper()}</div>
        </div>
      </div>
    </Styles>
  );
};

export default AboutMe;
