import Image from "next/image";

import { IconsComponentProps, SlideComponentProps } from "./AboutMe.types";

export const IconsComponent: React.FC<IconsComponentProps> = (props) => {
  const { src, title } = props;

  return (
    <div className="AboutMe__component--icon-container">
      <div className="AboutMe__component--icon-circle">
        <Image
          src={src}
          alt={title}
          className="AboutMe__component--icon-image"
          width={24}
          height={24}
        />
      </div>
      <p>{title}</p>
    </div>
  );
};

export const SlideComponent: React.FC<SlideComponentProps> = (props) => {
  const { src, title } = props;
  return (
    <div className="AboutMe__component--slide-container">
      <Image
        width={160}
        height={160}
        src={src}
        alt={title}
        className="AboutMe__component--slide-image"
      />
      <h4 className="AboutMe__component--slide-title">{title}</h4>
    </div>
  );
};

export const softSkills = [
  { image: "asertivo-min.png", title: "Asertivo" },
  { image: "objetivo-min.png", title: "Objetivo" },
  { image: "solidario-min.png", title: "Solidario" },
  { image: "innovador-min.png", title: "Innovador" },
  { image: "resiliente-min.png", title: "Resiliente" },
];

export const items = [
  {
    icon: "html.svg",
    title: "HTML",
  },
  {
    icon: "css.svg",
    title: "CSS",
  },
  {
    icon: "js.png",
    title: "Javascript",
  },
  {
    icon: "react.svg",
    title: "ReactJS",
  },
  {
    icon: "nextjs.svg",
    title: "NextJS",
  },
  {
    icon: "styled-components.png",
    title: "Styled Components",
  },
  {
    icon: "ts.svg",
    title: "Typescript",
  },
  {
    icon: "nodejs.svg",
    title: "NodeJS",
  },
  {
    icon: "mongodb.svg",
    title: "MongoDB",
  },
  {
    icon: "material-ui.svg",
    title: "Material UI",
  },
  {
    icon: "react-query.svg",
    title: "React Query",
  },
];
