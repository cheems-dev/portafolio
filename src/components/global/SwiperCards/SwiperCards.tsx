import { Autoplay, EffectCards } from "swiper";
import { Swiper } from "swiper/react";

import { SwiperCardsProps as Props } from "./SwiperCards.types";

import "swiper/css";
import "swiper/css/effect-cards";
import "./SwiperCard.css";

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
    >
      {children}
    </Swiper>
  );
};

export default SwiperCards;
