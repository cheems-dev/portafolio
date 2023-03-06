import { Autoplay, EffectCards } from "swiper";
import { Swiper } from "swiper/react";

import { SwiperCardsProps as Props } from "./SwiperCards.types";

import "swiper/css/effect-cards";
import "./index.css";

const SwiperCards: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="swiperCard"
    >
      {children}
    </Swiper>
  );
};

export default SwiperCards;
