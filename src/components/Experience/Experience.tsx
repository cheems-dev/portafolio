/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@/components/global/Button/Button";

import projects from "./Experience.helpers";
import Styles from "./Experience.styles";

import "./index.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Experience: React.FC = () => {
  const renderContext = () => (
    <div>
      <div>
        <h3>02.</h3>
        <h2 className="AboutMe__title">Mi trabajo</h2>
      </div>
      <p>
        A lo largo del tiempo he aprendido una gran cantidad de
        <b> habilidades técnicas</b> en cada proyecto que he realizado, esto me
        ha ayudado a mejorar cada vez mas en el desarrollo de productos
        digitales, <b>estos son algunos de ellos.</b>
      </p>
    </div>
  );

  const renderSlide = () =>
    projects.map((project, index) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { name, image, year, link } = project;
      const { type_project: typeProject, description, technologies } = project;

      return (
        <SwiperSlide key={index}>
          <div
            className={`Experience__container--project Experience__container--project-${
              index % 2 === 0 ? "isOdd" : "isEven"
            }`}
          >
            <div className="Experience__component--content">
              <div>
                <p className="Experience__component--content-text">
                  {name} - {year}
                </p>
                <p className="Experience__component--content-position">
                  {typeProject}
                </p>
              </div>
              <p className="Experience__component--content-text Experience__component--content-paragraph">
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

                    <p>{technology.tech_title}</p>
                  </div>
                ))}
              </div>

              <Button type="outlined">Link al proyecto</Button>
            </div>
            <div className="Experience__component--image">
              <img
                className="Experience__component--image-component"
                src={`/projects/feactured/${image}`}
                alt={`${image} - ${typeProject}`}
              />
            </div>
          </div>
        </SwiperSlide>
      );
    });

  return (
    <Styles className="Experience">
      <div className="GlobalStyles__container--center GlobalStyles__padding">
        <div className="GlobalStyles__container Experience__container">
          {renderContext()}
          {/* TODO: Refactor */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiperSlide"
          >
            {renderSlide()}
          </Swiper>
        </div>
      </div>
    </Styles>
  );
};

export default Experience;
