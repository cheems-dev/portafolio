import Image from "next/image";
import { projects } from "./Experience.helpers";
import Styles from "./Experience.styles";
import { ExperienceProps as Props } from "./Experience.types";

const Experience: React.FC<Props> = (props) => {
  const renderContext = () => (
    <>
      <h2 className="AboutMe__title">
        <span>02.</span> Mi trabajo
      </h2>
      <p>
        A lo largo del tiempo he aprendido una gran cantidad de
        <b> habilidades técnicas</b> en cada proyecto que he realizado, esto me
        ha ayudado a mejorar cada vez mas en el desarrollo de productos
        digitales, <b>estos son algunos de ellos.</b>
      </p>
    </>
  );

  return (
    <Styles className={`Experience`}>
      <div className="GlobalStyles__container--center GlobalStyles__padding">
        <div className="GlobalStyles__container">
          {renderContext()}
          {/* TODO: Pending */}
          {projects.map((project, index) => {
            const { name, image, year } = project;
            const { type_project, description, tecnologies, link } = project;

            return (
              <div className="Experience__container--project" key={index}>
                <div className="Experience__component--project">
                  <Image
                    width={708}
                    height={340}
                    className="Experience__component--project-image"
                    src={`/projects/feactured/${image}`}
                    alt={`${image} - ${type_project}`}
                  />
                </div>
                <div className="Experience__component--content">
                  <p className="Experience__component--content-text">
                    {name} - {year}
                  </p>
                  <p className="Experience__component--content-position">
                    {type_project}
                  </p>
                  <p className="Experience__component--content-text">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

export default Experience;
