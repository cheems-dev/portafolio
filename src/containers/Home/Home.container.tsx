import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Banner from "@/components/global/Banner/Banner";
import React from "react";

import { HomeContainerContainerProps as Props } from "./Home.types";

const HomeContainerContainer: React.FC<Props> = (props) => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience />
    </>
  );
};

export default HomeContainerContainer;
