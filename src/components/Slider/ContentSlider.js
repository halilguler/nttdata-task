import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../SliderCard/SliderCard";
import { BoxStyled, SliderStyled } from "./Styled/Styled";

const ContentSlider = () => {
  const sliderRef = useRef(null);

  const displaySliderCard = () => {
    const sliderCard = [];
    for (let i = 0; i < 4; i++) {
      sliderCard.push(<SliderCard />);
    }
    return sliderCard;
  };

  const settings = {
    speed: 500,
    arrows: false,
    dots: true,
    useTransform: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <BoxStyled>
      <SliderStyled ref={sliderRef} {...settings} autoplaySpeed={3500}>
        {displaySliderCard()}
      </SliderStyled>
    </BoxStyled>
  );
};

export default ContentSlider;
