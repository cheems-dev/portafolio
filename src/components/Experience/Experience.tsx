/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { projects } from "./Experience.helpers";
import Styles from "./Experience.styles";
import { ExperienceProps as Props } from "./Experience.types";
import Button from "@/components/global/Button/Button";

const Experience: React.FC<Props> = (props) => {
  const renderContext = () => (
    <div>
      <h2 className="AboutMe__title">
        <span>02.</span> Mi trabajo
      </h2>
      <p>
        A lo largo del tiempo he aprendido una gran cantidad de
        <b> habilidades técnicas</b> en cada proyecto que he realizado, esto me
        ha ayudado a mejorar cada vez mas en el desarrollo de productos
        digitales, <b>estos son algunos de ellos.</b>
      </p>
    </div>
  );

  return (
    <Styles className={`Experience`}>
      <div className="GlobalStyles__container--center GlobalStyles__padding">
        <div className="GlobalStyles__container Experience__container">
          {renderContext()}
          {/* TODO: Pending */}
          {projects.map((project, index) => {
            const { name, image, year } = project;
            const {
              type_project,
              description,
              tecnologies: technologies,
              link,
            } = project;

            return (
              <div className="Experience__container--project" key={index}>
                <div className="Experience__component--image">
                  <img
                    className="Experience__component--image-component"
                    src={`/projects/feactured/${image}`}
                    alt={`${image} - ${type_project}`}
                  />
                </div>
                <div className="Experience__component--content">
                  <div>
                    <p className="Experience__component--content-text">
                      {name} - {year}
                    </p>
                    <p className="Experience__component--content-position">
                      {type_project}
                    </p>
                  </div>
                  <p className="Experience__component--content-text">
                    {description}
                  </p>

                  <div className="Experience__component--stack">
                    {technologies.map((technology) => (
                      <div
                        key={technology.techId}
                        className="Experience__component--stack-chip"
                      >
                        <div className="Experience__component--stack-bg">
                          <Image
                            width={24}
                            height={24}
                            src={`/stack/${technology.tech_image}`}
                            alt={technology.tech_image}
                          />
                        </div>

                        <p>{technology.tech_image}</p>
                      </div>
                    ))}
                  </div>

                  <Button type="outlined">Link al proyecto</Button>
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
