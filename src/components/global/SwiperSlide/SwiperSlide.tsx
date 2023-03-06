import Styles from "./SwiperSlide.styles";
import { TemplateComponentProps as Props } from "./SwiperSlide.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SwiperSlide: React.FC<Props> = (props) => {
  return (
    <Styles className="SwiperSlide">
      <h2 className="TemplateComponent__title">title</h2>
      <h2 className="TemplateComponent__subtitle">Subtitle</h2>
    </Styles>
  );
};

export default SwiperSlide;
