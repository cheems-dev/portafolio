import { useId } from "react";

import { SwiperSlide } from "swiper/react";

import { IconsComponent, SlideComponent } from "./AboutMe.helpers";
import { items, softSkills } from "./AboutMe.helpers";
import Styles from "./AboutMe.styles";
import SwiperCards from "../global/SwiperCards/SwiperCards";

const AboutMe: React.FC = () => {
  const id = useId();

  const renderSwiper = () => (
    <SwiperCards>
      {softSkills.map((skill, index) => (
        <SwiperSlide key={`${id}-${index}`}>
          <SlideComponent
            src={`/soft-skill/${skill.image}`}
            title={skill.title}
          />
        </SwiperSlide>
      ))}
    </SwiperCards>
  );

  return (
    <Styles className="AboutMe">
      <div className="GlobalStyles__padding AboutMe__container">
        <div className="GlobalStyles__container AboutMe__container--global">
          <div className="AboutMe__container--aboutMe">
            <div>
              <h3>01.</h3>
              <h2 className="AboutMe__title">Sobre mí</h2>
            </div>
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
            <span className="AboutMe__component--border" />
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
