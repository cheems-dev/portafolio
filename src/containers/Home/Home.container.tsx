import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Banner from "@/components/global/Banner/Banner";

const HomeContainerContainer: React.FC = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience />
    </>
  );
};

export default HomeContainerContainer;
