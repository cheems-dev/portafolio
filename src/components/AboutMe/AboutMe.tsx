import Image from "next/image";
import { items } from "./AboutMe.helpers";
import Styles from "./AboutMe.styles";
import { AboutMeProps as Props } from "./AboutMe.types";

const AboutMe: React.FC<Props> = (props) => {
  const renderIcons = (
    index: number,
    item: { icon: string; title: string }
  ) => (
    <div key={index} className="AboutMe__component--icon-container">
      <div className="AboutMe__component--icon-circle">
        <Image
          src={`/stack/${item.icon}`}
          alt={item.title}
          className="AboutMe__component--icon-image"
          width={24}
          height={24}
        />
      </div>
      <p>{item.title}</p>
    </div>
  );

  return (
    <Styles className={`AboutMe`}>
      <div className="AboutMe__container">
        <div className="GlobalStyles__container">
          <div className="AboutMe__container--aboutMe">
            {/* TODO: Reuse title  */}
            <h2 className="AboutMe__title">
              <span>01.</span> Sobre mí
            </h2>
            <div className="AboutMe__container--text">
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
          </div>
          <div className="AboutMe__container--stack">
            {items.map((item, index) => renderIcons(index, item))}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default AboutMe;
